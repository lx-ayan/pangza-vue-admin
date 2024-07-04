import { hideFullLoading, showFullLoading } from "@/config/loading";
import np from "@/config/nprogress";
import themeStore from "@/store/theme";
import { getCurrentUser, getToken, hasPermission } from "@/utils/security";
import { RouteLocationNormalized, RouteRecordRaw, Router } from "vue-router";
import { getGlobalEnv } from "@vite/env";
import { getUserMenu } from "@/api/menu";
import { addRoute, getRouteList } from "./autoload_server";
import autoLoadByViews from "./autoload_views";
import autoloadByModules from "./autoload_modules";
import { ADD_ROUTE_NAME } from "@/common/const";
import { cloneDeep } from "lodash-es";

class RouterGuard {
    router: Router | null = null;
    finish = false;
    constructor(router: Router) {
        this.router = router;
    }

    run() {
        this.router!.beforeEach(this.beforeEach.bind(this));
        this.router!.afterEach(this.afterEach);
    }

    private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {

        if (!this.finish && getToken()) {
            const serverAble = getGlobalEnv().VITE_AUTO_LOAD_SERVER;
            if (serverAble) {
                const menuList = await getUserMenu();
                const formatList = getRouteList(menuList);
                formatList!.forEach((item) => {
                    addRoute(this.router!, item);
                });
            } else {
                const user = getCurrentUser();
                let _routes = (getGlobalEnv().VITE_AUTO_LOAD ? autoLoadByViews : autoloadByModules)();

                if (getToken()) {
                    _routes = _routes.map(route => {
                        if (route.children) {
                            route.children = filterRouterByPermission(route.children, user?.permission!)
                        }
                        return route;
                    })
                }
                _routes.forEach(route => {
                    this.router!.addRoute(ADD_ROUTE_NAME, route);
                })
            }
            this.finish = true;
        }

        const useThemeStore = themeStore();
        if (to.path == '/login') {
            this.finish = false;
        }

        if (useThemeStore.nprogress) {
            np.start();
        }

        if (useThemeStore.loading) {
            showFullLoading('页面加载中...');
        }

        if (this.isGuest(to) === false) {
            return { name: 'home' }
        }

        if (this.isLogin(to) === false) {
            return { name: 'login' }
        }

        if (this.isPermission(to) === false) {
            return { name: '500' }
        }

    }

    private afterEach() {
        np.done();
        hideFullLoading();
    }

    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !getToken()));
    }

    private isLogin(route: RouteLocationNormalized) {
        return Boolean(!route.meta.auth || (route.meta.auth && getToken()));
    }

    private isPermission(route: RouteLocationNormalized) {
        if (!route.meta.permission) {
            return true;
        }
        return hasPermission(route.meta.permission);
    }
}


export default (router: Router) => {
    const routerGuard = new RouterGuard(router);
    routerGuard.run();
}

function filterRouterByPermission(routes: RouteRecordRaw[], permission: string[]): RouteRecordRaw[] {
    let _routes = cloneDeep(routes);
    _routes = routes?.filter(r => {
        if (r.children) {
            r.children = filterRouterByPermission(r.children, permission);
        }
        const routePermission = r.meta?.permission;
        return routePermission ? hasPermission(routePermission) : true
    })
    return _routes;
}