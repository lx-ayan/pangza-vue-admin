import { MenuResult } from '@t/menu';

const adminMenu: MenuResult[] = [
    {
        path: '/views',
        name: 'views',
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
                name: 'views.success',
                meta: {
                    title: '成功页面',
                    show: true
                }
            },
            {
                path: '/views/error',
                name: 'views.error',
                meta: {
                    title: '失败页面',
                    show: true
                }
            },
            {
                path: '/views/notfound',
                name: 'views.notfound',
                meta: {
                    title: '404页面',
                    show: true
                }
            },
            {
                path: '/views/networkerror',
                name: 'views.networkerror',
                meta: {
                    title: '网络异常',
                    show: true
                }
            },
            {
                path: '/views/website',
                name: 'views.website',
                meta: {
                    title: '外部链接',
                    show: true,
                },
                children: [
                    {
                        path: '/views/website/vue',
                        name: 'views.website.vue',
                        meta: {
                            web: true,
                            open: true,
                            href: 'https://cn.vuejs.org/',
                            title: 'vue 官网',
                        }
                    },
                    {
                        path: '/views/website/pinia',
                        name: 'views.website.pinia',
                        meta: {
                            title: 'pinia 官网',
                            href: 'https://pinia.vuejs.org/zh/',
                            web: true,
                            open: true,
                        }
                    },
                    {
                        path: '/views/website/vite',
                        name: 'views.website.vite',
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
                name: 'views.webinner',
                meta: {
                    title: '内嵌网页',
                    show: true,
                },
                children: [
                    {
                        path: '/views/webinner/tdesign',
                        name: 'views.webinner.tdesign',
                        meta: {
                            title: 'TDesign 组件库',
                            web: true,
                            href: 'https://tdesign.tencent.com/vue-next/overview'
                        }
                    },
                    {
                        path: '/views/webinner/procomponent',
                        name: 'views.webinner.procomponent',
                        meta: {
                            title: '高级组件',
                            web: true,
                            href: 'https://pangzablog.cn/#/procomponent'
                        }
                    }
                ]
            }

        ]
    },
    {
        path: '/role',
        name: 'role',
        meta: {
            title: '权限管理',
            icon: 'tools',
            show: true,
            auth: true
        },
        children: [
            {
                path: '/role/web',
                name: 'role.web',
                meta: {
                    title: '页面权限',
                    show: true,
                }
            },
            {
                path: '/role/button',
                name: 'role.button',
                meta: {
                    title: '按钮权限',
                    show: true,
                    permission: ['role_ADMIN']
                }
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            auth: true,
            show: true,
            sorter: 99,
            title: '控制台',
            icon: 'home'
        }
    },
    {
        path: '/component',
        name: 'component',
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
                meta: {
                    title: '表单组件',
                    show: true,
                },
            },
            {
                path: '/component/table',
                name: 'component.table',
                meta: {
                    title: '表格组件',
                    show: true,
                },
            },
            {
                path: '/component/page',
                name: 'component.page',
                meta: {
                    title: '页面容器',
                    show: true,
                },
            },
            {
                path: '/component/description',
                name: 'component.description',
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
            }
        ]
    },

    {
        path: '/system',
        name: 'system',
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
                    permission: 'role_SUPERADMIN'
                },
            },
            {
                path: '/system/role',
                name: 'system.role',
                meta: {
                    show: true,
                    title: '角色管理',
                    permission: 'role_ADMIN'
                },
            },
            {
                path: '/system/menu',
                name: 'system.menu',
                meta: {
                    show: true,
                    title: '菜单管理',
                    permission: 'role_ADMIN'
                },
            },
            {
                path: '/system/log',
                name: 'system.log',
                meta: {
                    show: true,
                    title: '日志管理',
                    permission: 'role_ADMIN'
                },
            }
        ]
    }
]

const userMenu: MenuResult[] = [
    {
        path: '/views',
        name: 'views',
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
                name: 'views.success',
                meta: {
                    title: '成功页面',
                    show: true
                }
            },
            {
                path: '/views/error',
                name: 'views.error',
                meta: {
                    title: '失败页面',
                    show: true
                }
            },
            {
                path: '/views/notfound',
                name: 'views.notfound',
                meta: {
                    title: '404页面',
                    show: true
                }
            },
            {
                path: '/views/networkerror',
                name: 'views.networkerror',
                meta: {
                    title: '网络异常',
                    show: true
                }
            },
            {
                path: '/views/website',
                name: 'views.website',
                meta: {
                    title: '外部链接',
                    show: true,
                },
                children: [
                    {
                        path: '/views/website/vue',
                        name: 'views.website.vue',
                        meta: {
                            web: true,
                            open: true,
                            href: 'https://cn.vuejs.org/',
                            title: 'vue 官网',
                        }
                    },
                    {
                        path: '/views/website/pinia',
                        name: 'views.website.pinia',
                        meta: {
                            title: 'pinia 官网',
                            href: 'https://pinia.vuejs.org/zh/',
                            web: true,
                            open: true,
                        }
                    },
                    {
                        path: '/views/website/vite',
                        name: 'views.website.vite',
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
                name: 'views.webinner',
                meta: {
                    title: '内嵌网页',
                    show: true,
                },
                children: [
                    {
                        path: '/views/webinner/tdesign',
                        name: 'views.webinner.tdesign',
                        meta: {
                            title: 'TDesign 组件库',
                            web: true,
                            href: 'https://tdesign.tencent.com/vue-next/overview'
                        }
                    },
                    {
                        path: '/views/webinner/procomponent',
                        name: 'views.webinner.procomponent',
                        meta: {
                            title: '高级组件',
                            web: true,
                            href: 'https://pangzablog.cn/#/procomponent'
                        }
                    }
                ]
            }

        ]
    },
    {
        path: '/role',
        name: 'role',
        meta: {
            title: '权限管理',
            icon: 'tools',
            show: true,
            auth: true
        },
        children: [
            {
                path: '/role/web',
                name: 'role.web',
                meta: {
                    title: '页面权限',
                    show: true
                }
            },
            {
                path: '/role/button',
                name: 'role.button',
                meta: {
                    title: '按钮权限',
                    show: true
                }
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            auth: true,
            show: true,
            sorter: 99,
            title: '控制台',
            icon: 'home'
        }
    },
    {
        path: '/component',
        name: 'component',
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
                meta: {
                    title: '表单组件',
                    show: true,
                },
            },
            {
                path: '/component/table',
                name: 'component.table',
                meta: {
                    title: '表格组件',
                    show: true,
                },
            },
            {
                path: '/component/page',
                name: 'component.page',
                meta: {
                    title: '页面容器',
                    show: true,
                },
            },
            {
                path: '/component/description',
                name: 'component.description',
                meta: {
                    title: '描述组件',
                    show: true,
                },
            }
        ]
    }
]

export default [
    {
        url: '/api/menu',
        method: 'get',
        response: ({ query }: { query: LoginForm }) => {
            return {
                code: 200,
                data: adminMenu,
                message: '请求成功'
            }
        },
    }
] 