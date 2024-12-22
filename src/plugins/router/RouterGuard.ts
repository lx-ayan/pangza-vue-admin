import { RouteLocationNormalized, RouteRecordRaw, Router } from "vue-router";
// 路由自动装载 views 页面
import { autoloadByViews } from "./autoload/views";
// 路由自动装载 modules 配置
import { autoloadByModules } from "./autoload/modules";
import { APP_NAME } from "@/common/const";
import { getCurrentUser, getToken, hasPermission } from "@/utils/security";
import { getGlobalEnv } from "@v/env";
import { getUserMenu } from "@/api/menu";
import { addRoute, getServerRouteList } from "./autoload/server";
import { cloneDeep } from "lodash-es";
import { removeNProgress, startNProgress } from "@/config/nprogress";


class RouterGuard {

    router: NullAble<Router> = null;

    autoloadFinish: boolean = false;

    routes: RouteRecordRaw[] = [];

    constructor(router: Router) {
        this.router = router;
    }

    run() {
        this.router!.beforeEach(this.beforeEach.bind(this));
        this.router!.afterEach(this.afterEach);
    }

    private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
        startNProgress();
        const env = getGlobalEnv();
        const serverAble = env.VITE_AUTO_LOAD_MODE;
        const filterNoPermission = env.VITE_FILTER_PERMISSION_ROUTE;

        if (!this.autoloadFinish && getToken()) {
            if (serverAble === 'server') {
                const userRouters = await getUserMenu();
                this.routes = getServerRouteList(userRouters);
                this.routes!.forEach((item) => {
                    addRoute(this.router!, item);
                });
            } else {
                const user = getCurrentUser();
                this.routes = (serverAble === 'module' ? autoloadByModules : autoloadByViews)();
                if (filterNoPermission) {
                    this.routes = this.routes.map(route => {
                        if (route.children) {
                            route.children = filterRouterByPermission(route.children, user?.permission!)
                        }
                        return route;
                    })
                }
                this.routes.forEach(route => {
                    this.router!.addRoute(APP_NAME, route);
                })
            }
            this.autoloadFinish = true;
        }


        if (to.path === '/login') {
            if (getToken()) return from;
            this.resetRouters();
            this.autoloadFinish = false;
        }

        if (this.isLogin(to) === false) {
            return { name: 'login' }
        }

        if (this.isPermission(to) === false) {
            return { name: '403' }
        }

    }

    private afterEach() {
        removeNProgress()
    }

    private isLogin(route: RouteLocationNormalized) {
        return Boolean(!route.meta.auth || (route.meta.auth && getToken()));
    }

    private resetRouters() {
        this.routes.forEach(route => {
            const { name } = route;
            if (name && this.router?.hasRoute(name)) {
                this.router?.removeRoute(name);
            }
        })
    }

    private isPermission(route: RouteLocationNormalized) {
        if (!route.meta.permission || (route.meta?.permission && !route.meta?.permission.length)) {
            return true;
        }

        return hasPermission(route.meta?.permission || []);
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