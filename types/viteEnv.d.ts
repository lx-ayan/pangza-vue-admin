type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd';

interface ViteEnv {
    readonly VITE_TITLE: string;
    readonly VITE_PROXY: ViteProxyList;
    readonly VITE_AUTO_LOAD: boolean;
    readonly VITE_STORE_TIME_UNIT: TimeUnit;
    readonly VITE_AUTO_LOAD_SERVER: boolean;
}

interface ImportMetaEnv extends ViteEnv {

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}