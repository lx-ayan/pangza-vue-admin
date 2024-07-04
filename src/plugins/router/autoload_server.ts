import { ADD_ROUTE_NAME } from "@/common/const";
import { MenuResult } from "@t/menu";
import { RouteMeta, RouteRecordRaw, Router } from "vue-router";

const module = import.meta.glob('../../pages/**/*.vue');

function formatRoute(routeList: Array<MenuResult>, parentMeta?: RouteMeta) {
    const formatRouteList: Array<RouteRecordRaw> = [];
    if (!routeList) return;
    routeList.forEach(route => {
        const { path, name, meta } = route;
        const currentRoute: any = {};
        currentRoute.path = path;
        currentRoute.name = name;
        currentRoute.meta = meta;
        if (parentMeta) {
            currentRoute.meta.parentMeta = {
                ...parentMeta
            }
        }
        currentRoute.component = module[`../../pages${path}/index.vue`];
        if (route.children && route.children.length) {
            currentRoute.children = formatRoute(route.children, meta);
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