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
                path: '/home',
                name: 'home',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    title: '控制台',
                    auth: true
                }
            },
            {
                name: '500',
                path: '/error',
                component: () => import('@/pages/result/NotFound.vue'),
                meta: {
                    title: '错误了'
                }
            },
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
    },

];

export default routes;