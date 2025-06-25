import { RouteRecordRaw } from "vue-router";
import router from ".";
import { APP_NAME } from "@/common/const";

export default [
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
        name: 'login',
        meta: {
            auth: false,
            title: '登录'
        }
    },
    {
        path: '/',
        name: APP_NAME,
        redirect: '/home',
        component: () => import('@/views/home.vue'),
        meta: {
            auth: true,
            title: '仪表盘'
        },
        children: [
            {
                path: '/403',
                name: '403',
                component: () => import('@/views/result/nopermission/index.vue')
            },
            {
                path: '/:pathMatch(.*)',
                component: () => import('@/views/result/notfound/index.vue'),
                meta: {},
                beforeEnter: (to) => {
                    const toRoute = router.getRoutes()
                        .find((item) => to.path.toLowerCase() == item.path.toLowerCase());
                    if (toRoute) {
                        return to;
                    }
                }
            }
        ]
    }
] as RouteRecordRaw[]