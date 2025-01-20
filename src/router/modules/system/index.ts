import { RouteRecordRaw } from "vue-router";

export default {
    path: '/system',
    name: 'system',
    redirect: '/system/log',
    meta: {
        title: '系统管理',
        auth: true,
        show: true
    },
    children: [
        {
            path: '/system/log',
            name: 'system.log',
            meta: {
                title: '日志管理',
                auth: true,
                show: true
            },
            component: () => import('@/views/system/log/index.vue')
        }
    ]
} as RouteRecordRaw