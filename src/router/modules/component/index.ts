import { RouteRecordRaw } from "vue-router";

export default {
    path: '/component',
    name: 'component',
    component: () => import('@/layouts/component/index.vue'),
    meta: {
        title: '组件',
        icon: 'component-grid',
        show: true,
        auth: true,
    },
    children: [
        {
            path: '/component/form',
            name: 'component.form',
            component: () => import('@/pages/component/form/index.vue'),
            meta: {
                title: '表单组件',
                show: true,
            },
        },
        {
            path: '/component/table',
            name: 'component.table',
            component: () => import('@/pages/component/table/index.vue'),
            meta: {
                title: '表格组件',
                show: true,
            },
        },
        {
            path: '/component/page',
            name: 'component.page',
            component: () => import('@/pages/component/page/index.vue'),
            meta: {
                title: '页面容器',
                show: true,
            },
        },
        {
            path: '/component/description',
            name: 'component.description',
            component: () => import('@/pages/component/description/index.vue'),
            meta: {
                title: '描述组件',
                show: true,
            },
        },
        {
            path: '/component/canvas-editor',
            name: 'component.canvas-editor',
            meta: {
                title: 'CanvasEditor 编辑器',
                show: true
            }
        },
        {
            path: '/component/flow',
            name: 'component.flow',
            meta: {
                title: '流程图',
                show: true
            }
        }
    ]
} as RouteRecordRaw;