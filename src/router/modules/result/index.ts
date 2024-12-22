import { RouteRecordRaw } from "vue-router";

export default {
    path: '/result',
    redirect: '/result/success',
    children: [
        {
            path: '/result/success',
            component: () => import('@/views/result/success/index.vue')
        },
        {
            path: '/result/error',
            component: () => import('@/views/result/error/index.vue')
        },
        {
            path: '/result/notfound',
            component: () => import('@/views/result/notfound/index.vue')
        },
        {
            path: '/result/nopermission',
            component: () => import('@/views/result/nopermission/index.vue')
        }
    ]
} as RouteRecordRaw