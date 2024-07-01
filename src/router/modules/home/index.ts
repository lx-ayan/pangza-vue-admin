import { RouteRecordRaw } from "vue-router";

export default {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
        auth: true,
        show: true,
        sorter: 99,
        title: '控制台',
        icon: 'home'
    }
} as RouteRecordRaw