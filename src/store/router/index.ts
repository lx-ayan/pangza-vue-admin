import { defineStore } from "pinia";
import { RouteRecordNormalized, useRouter } from "vue-router";

const routerStore = defineStore('routerStore', {
    state: () => ({
        routeList: [] as RouteRecordNormalized[]
    }),
    actions: {

    },
    getters: {
        getRouteList() {
            return getRoutes() as RouteRecordNormalized[];
        }
    }
});

function getRoutes() {
    const router = useRouter();
    const routes = router.getRoutes().filter(route => route?.children.length && route.meta?.show).map(route => {
        route.children = route.children.filter(cRoute => cRoute.meta?.show);
        return route;
    });
    console.log('routes', routes);
    return [
        router.getRoutes().find(route => route.path === '/home'),
        ...routes.sort((aRoute, bRoute) => (bRoute!.meta?.sorter || 0) - (aRoute!.meta?.sorter || 0)),
    ];
}

export default routerStore;