interface ViteEnv {
    readonly VITE_TITLE: string; // 系统标题
    readonly VITE_PROXY: [string, string, boolean?][]; // 请求代理
    readonly VITE_AUTO_LOAD_MODE: 'server' | 'view' | 'module'; // 自动加载路由模式 默认 view
    readonly VITE_STORE_TIME_UNIT: TimeUnit; // store 过期时间单位
    readonly VITE_BASE_API: string; // 默认地址
    readonly VITE_PORT: number; // 服务端口
    readonly VITE_AXIOS_TIMEOUT: number; // axios 超时时间
    readonly VITE_FILTER_PERMISSION_ROUTE: boolean; // 添加路由时是否过滤没有权限的路由 开启如果访问会进入404，不开启会进入 403
}

interface ImportMetaEnv extends ViteEnv {

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}