import { APP_NAME } from "@/common/const";
import { MenuResult } from "@t/api/menu";
import { RouteRecordRaw, Router } from "vue-router";

const childrenModule = import.meta.glob('../../../views/**/*.vue');
const parentModule = import.meta.glob('../../../layouts/**/*.vue');

function formatRoute(routeList: Array<MenuResult>, children = false): RouteRecordRaw[] {
    const formatRouteList: Array<RouteRecordRaw> = [];
    if (!routeList) return [];
    routeList.forEach(route => {
        const { path, name, meta } = route;
        const currentRoute: any = {};
        currentRoute.path = path;
        currentRoute.name = name;
        currentRoute.meta = meta;
        // currentRoute.component = module[`../../../views${path}/index.vue`];
        const modulePath = `../../../${children ? 'views' : 'layouts'}${path}/index.vue`;
        currentRoute.component = children ? childrenModule[modulePath] : parentModule[modulePath];
        if (route.children && route.children.length) {
            currentRoute.children = formatRoute(route.children, true);
        }
        formatRouteList.push(currentRoute);
    })

    return formatRouteList;
}

export function getServerRouteList(routeList: Array<MenuResult>) {
    const formatRouteList = formatRoute(routeList);
    return formatRouteList;
}

export function addRoute(router: Router, route: RouteRecordRaw, name: string = APP_NAME) {
    router.addRoute(name, route);
}