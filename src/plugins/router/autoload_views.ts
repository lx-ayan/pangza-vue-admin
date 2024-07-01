import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob('../../layouts/**/*.vue', { eager: true });

const pages = import.meta.glob('../../pages/**/index.vue', { eager: true });

const nameREG = /.+layouts\/|.+pages\/|\/index.vue/gi;

function autoLoadByViews() {
    const layoutRoutes: RouteRecordRaw[] = [];
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRouteByModule(file, module as any);
        route.children = getChildrenRoutes(route);
        layoutRoutes.push(route);
    });
    return layoutRoutes;
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const { name } = layoutRoute;
    const routes: RouteRecordRaw[] = [];
    Object.entries(pages).forEach(([file, module]) => {
        if (file.includes(`../../pages/${name as string}`)) {
            if (!file.includes('components')) {
                const route = getRouteByModule(file, module as any);
                routes.push({
                    ...route,
                    meta: {
                        parentMeta: layoutRoute
                    }
                });
            }
        }
    });
    return routes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(nameREG, '')
    const route: RouteRecordRaw = {
        path: `/${name}`,
        name: name.replace('/', '.'),
        component: module.default
    }
    return Object.assign(route, module.default?.route);
}

export default autoLoadByViews;