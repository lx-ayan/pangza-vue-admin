import { RouteRecordRaw } from "vue-router";
import router from ".";
const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path: '/',
        component: () => import('@/pages/home.vue'),
        name: 'app',
        redirect: '/home',
        meta: {
            auth: true
        },
        children: [
            {
                path: '/:pathMatch(.*)',
                component: () => import('@/pages/result/NotFound.vue'),
                meta: {},
                beforeEnter: (to) => {
                    const toRoute = router
                        .getRoutes()
                        .find((item) => to.path == item.path);
                    if (toRoute) {
                        return to;
                    }
                }
            }
        ]
    }
];

export default routes;