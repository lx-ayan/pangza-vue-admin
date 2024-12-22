import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta {
        title: string; // 路由标题
        auth?: boolean; // 页面需要登录后访问
        parentMeta?: RouteMeta; // 父级路由信息
        show?: boolean; // 是否展示于左侧菜单
        icon?: string; // 菜单图标，请使用 TDesign 自带的
        web?: boolean; // 是否为网页
        open?: boolean; // 点击时是否打开网页
        href?: string; //  网页地址
        sorter?: number; // 排序
        permission?: string | string[]; // 页面权限
    }
}