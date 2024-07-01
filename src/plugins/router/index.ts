import { getGlobalEnv } from "@vite/env";
import autoLoadByViews from "./autoload_views";
import autoloadByModules from "./autoload_modules";
import { RouteRecordRaw, Router } from "vue-router";
import userStore from "@/store/user";
import { cloneDeep } from "lodash-es";
import { getToken } from "@/utils/security";

export default function autoLoadRoutes(router: Router) {
    const useUserStore = userStore();
    let _routes = (getGlobalEnv().VITE_AUTO_LOAD ? autoLoadByViews : autoloadByModules)();

    if (getToken()) {
        _routes = _routes.map(route => {
            if (route.children) {
                route.children = filterRouterByPermission(route.children, useUserStore.getUser?.permission!)
            }
            return route;
        })
    }
    console.log('_routes', _routes);
    _routes.forEach(route => {
        router.addRoute('app', route);
    })
}

function filterRouterByPermission(routes: RouteRecordRaw[], permission: string[]): RouteRecordRaw[] {
    console.log('permission', permission);
    let _routes = cloneDeep(routes);
    _routes = routes?.filter(r => {
        if (r.children) {
            r.children = filterRouterByPermission(r.children, permission);
        }
        const routePermission = r.meta?.permission;
        return routePermission ? permission.includes(routePermission) : true
    })
    return _routes;
}