import { RouteRecordRaw } from "vue-router";

const layoutsList = import.meta.glob('../../../layouts/**/index.vue', { eager: true });
const viewList = import.meta.glob('../../../views/**/index.vue', { eager: true });

// 视图中的组件文件夹不需要自动注册
const viewComponents = import.meta.glob('../../../views/*/components/**/index.vue');

const nameREG = /.+layouts\/|.+views\/|\/index.vue/gi;

export function autoloadByViews() {
    const routeList: RouteRecordRaw[] = [];
    Object.entries(layoutsList).forEach(([file, module]: any) => {
        const route = getRouteByModule(file, module);
        route.children = getChildrenRoutes(route);
        if (route.children && route.children.length > 0) {
            route.redirect = route.children[0].path;
        }
        routeList.push(route);
    });
    return routeList;
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const { name } = layoutRoute;
    const routes: RouteRecordRaw[] = [];
    const componentsFile = Object.keys(viewComponents);
    Object.entries(viewList).forEach(([file, module]) => {
        if (file.includes(`../../../views/${name as string}`)) {
            if (!componentsFile.includes(file)) {
                const route = getRouteByModule(file, module as any);
                routes.push({
                    ...route,
                });
            }
        }
    });
    return routes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(nameREG, '');
    const route: RouteRecordRaw = {
        path: `/${name}`.toLocaleLowerCase(),
        name: name.replaceAll('/', '.'),
        meta: {
            title: name.replaceAll('/', '.'),
        },
        component: module.default
    };
    return Object.assign(route, module.default?.route);
}