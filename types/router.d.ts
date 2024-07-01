import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta {
        auth?: boolean;
        guest?: boolean;
        parentMeta?: RouteRecordRaw;
        show?: boolean;
        title?: string;
        icon?: string;
        web?: boolean;
        open?: boolean;
        href?: string;
        sorter?: number;
        permission?: string;
    }
}