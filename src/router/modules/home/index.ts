import { RouteRecordRaw } from "vue-router";

export default {
    path: '/home',
    meta: {
        auth: true,
        show: true,
        title: '仪表盘'
    },
    component: () => import('@/layouts/home/index.vue'),
    children: [
        {
            path: '/home',
            component: () => import('@/views/home/index.vue')
        }
    ]
} as RouteRecordRaw