import { RouteRecordRaw } from "vue-router";
export default {
    path: '/views',
    component: () => import('@/layouts/views/index.vue'),
    meta: {
        title: '页面',
        icon: 'terminal-window',
        show: true,
        auth: true,
        sorter: 99
    },
    children: [
        {
            path: '/views/success',
            component: () => import('@/pages/views/success/index.vue'),
            meta: {
                title: '成功页面',
                show: true,
            },
        },
        {
            path: '/views/error',
            component: () => import('@/pages/views/error/index.vue'),
            meta: {
                title: '失败页面',
                show: true
            }
        },
        {
            path: '/views/notfound',
            component: () => import('@/pages/views/notfound/index.vue'),
            meta: {
                title: '404页面',
                show: true
            }
        },
        {
            path: '/views/networkerror',
            component: () => import('@/pages/views/networkerror/index.vue'),
            meta: {
                title: '网络异常',
                show: true
            }
        },
        {
            path: '/views/website',
            meta: {
                title: '外部链接',
                show: true,
            },
            children: [
                {
                    path: '/views/website/vue',
                    meta: {
                        web: true,
                        open: true,
                        href: 'https://cn.vuejs.org/',
                        title: 'vue 官网',
                    }
                },
                {
                    path: '/views/website/pinia',
                    meta: {
                        title: 'pinia 官网',
                        href: 'https://pinia.vuejs.org/zh/',
                        web: true,
                        open: true,
                    }
                },
                {
                    path: '/views/website/vite',
                    meta: {
                        title: 'vite 官网',
                        href: 'https://vitejs.cn/',
                        web: true,
                        open: true,
                    }
                }
            ]
        },
        {
            path: '/views/webinner',
            meta: {
                title: '内嵌网页',
                show: true,
            },
            children: [
                {
                    path: '/views/webinner/tdesign',
                    component: () => import('@/pages/views/webinner/tdesign/index.vue'),
                    meta: {
                        title: 'TDesign 组件库',
                        web: true,
                        href: 'https://tdesign.tencent.com/vue-next/overview'
                    }
                },
                {
                    path: '/views/webinner/procomponent',
                    component: () => import('@/pages/views/webinner/procomponent/index.vue'),
                    meta: {
                        title: '高级组件',
                        web: true,
                        href: 'https://pangzablog.cn/#/procomponent'
                    }
                }
            ]
        }

    ]
} as RouteRecordRaw