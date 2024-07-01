import { RouteRecordRaw } from "vue-router";

export default {
    path: '/role',
    component: () => import('@/layouts/role/index.vue'),
    meta: {
        title: '权限管理',
        icon: 'tools',
        show: true,
        auth: true
    },
    children: [
        {
            path: '/role/web',
            component: () => import('@/pages/role/web/index.vue'),
            meta: {
                title: '页面权限',
                show: true
            }
        },
        {
            path: '/role/button',
            component: () => import('@/pages/role/button/index.vue'),
            meta: {
                title: '按钮权限',
                show: true
            }
        }
    ]
} as RouteRecordRaw