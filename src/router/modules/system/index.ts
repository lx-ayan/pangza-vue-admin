import { RouteRecordRaw } from "vue-router";

export default {
    path: '/system',
    name: 'system',
    component: () => import('@/layouts/system/index.vue'),
    meta: {
        show: true,
        title: '系统管理',
        icon: 'setting-1',
        auth: true,
        permission: 'role_ADMIN'
    },
    children: [
        {
            path: '/system/user',
            name: 'system.user',
            meta: {
                show: true,
                title: '用户管理',
                permission: 'role_ADMIN'
            },
            component: () => import('@/pages/system/user/index.vue')
        },
        {
            path: '/system/role',
            name: 'system.role',
            component: () => import('@/pages/system/role/index.vue'),
            meta: {
                show: true,
                title: '角色管理',
                permission: 'role_ADMIN'
            },
        },
        {
            path: '/system/menu',
            name: 'system.menu',
            component: () => import('@/pages/system/menu/index.vue'),
            meta: {
                show: true,
                title: '菜单管理',
                permission: 'role_ADMIN'
            },
        },
        {
            path: '/system/log',
            name: 'system.log',
            component: () => import('@/pages/system/log/index.vue'),
            meta: {
                show: true,
                title: '日志管理',
                permission: 'role_ADMIN'
            },
        }
    ]
} as RouteRecordRaw;