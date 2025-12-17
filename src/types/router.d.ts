import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        auth?: boolean; // 需要认证
        title?: string; // 标题
        permission?: string[]; // 权限标识
        hidden?: boolean; // 隐藏
        link?: boolean; // 是否外链
        frame?: boolean; // 是否内嵌
        href?: string; // 外链/内嵌地址
        icon?: string; // 图标
    }
}