import { ADD_ROUTE_NAME } from "@/common/const";
import { MenuResult } from "@t/menu";
import { RouteRecordRaw, Router } from "vue-router";

const module = import.meta.glob('../../pages/**/*.vue');

function formatRoute(routeList: Array<MenuResult>, parentRoute?: MenuResult) {
    const formatRouteList: Array<RouteRecordRaw> = [];
    if (!routeList) return;
    routeList.forEach(route => {
        const { path, name, meta } = route;
        const currentRoute: any = {};
        currentRoute.path = path;
        currentRoute.name = name;
        currentRoute.meta = meta;
        if (parentRoute) {
            currentRoute.meta.parentMeta = {
                ...parentRoute
            }
        }
        currentRoute.component = module[`../../pages${path}/index.vue`];
        if (route.children && route.children.length) {
            currentRoute.children = formatRoute(route.children, route);
        }
        formatRouteList.push(currentRoute);
    })

    return formatRouteList;
}

export function getRouteList(routeList: Array<MenuResult>) {
    const formatRouteList = formatRoute(routeList);
    return formatRouteList;
}

export function addRoute(router: Router, route: RouteRecordRaw, name: string = ADD_ROUTE_NAME) {
    router.addRoute(name, route);
}