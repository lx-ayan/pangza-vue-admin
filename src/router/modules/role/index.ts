import { RouteRecordRaw } from "vue-router";

export default {
    path: '/role',
    meta: {
        title: '权限预览',
        auth: true,
        show: true
    },
    children: [
        {
            path: '/role/page',
            meta: {
                permission: ['ROLE_ADMIN']
            },
            component: () => import('@/views/role/page/index.vue')
        },
        {
            path: '/role/button',
            component: () => import('@/views/role/button/index.vue')
        }
    ]
} as RouteRecordRaw