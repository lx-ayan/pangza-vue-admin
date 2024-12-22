import { RouteRecordRaw } from "vue-router";

export default {
    path: '/components',
    redirect: '/components/protable',
    meta: {
        title: '组件预览',
        auth: true
    },
    children: [
        {
            path: '/components/docs',
            component: () => import('@/views/components/docs/index.vue'),
            meta: {
                title: '组件文档',
                auth: true,
            }
        },
        {
            path: '/components/protable',
            meta: {
                title: '表格',
                auth: true,
            },
            component: () => import('@/views/components/protable/index.vue')
        },
        {
            path: '/components/proform',
            meta: {
                title: '表单',
                auth: true,
            },
            component: () => import('@/views/components/proform/index.vue')
        },
        {
            path: '/components/rowcontainer',
            meta: {
                title: '行容器',
                auth: true,
            },
            component: () => import('@/views/components/rowcontainer/index.vue'),
        },
        {
            path: '/components/pagecontainer',
            meta: {
                title: '页面容器',
                auth: true,
            },
            component: () => import('@/views/components/pagecontainer/index.vue')
        },
        {
            path: '/components/probutton',
            meta: {
                title: '操作按钮',
                auth: true,
            },
            component: () => import('@/views/components/probutton/index.vue')
        }
    ]
} as RouteRecordRaw