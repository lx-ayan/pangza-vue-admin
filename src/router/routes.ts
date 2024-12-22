import { RouteRecordRaw } from "vue-router";
import router from ".";
import { APP_NAME } from "@/common/const";
import { t } from "@/plugins";
import { ROUTER_HOME, ROUTER_LOGIN } from "@/common/lang";

export default [
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
        name: 'login',
        meta: {
            auth: false,
            title: t(ROUTER_LOGIN)
        }
    },
    {
        path: '/',
        name: APP_NAME,
        redirect: '/home',
        component: () => import('@/views/home.vue'),
        meta: {
            auth: true,
            title: t(ROUTER_HOME)
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