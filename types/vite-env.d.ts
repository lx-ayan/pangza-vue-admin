type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd';

export interface ViteEnv {
    readonly VITE_TITLE: string;
    readonly VITE_PROXY: ViteProxyList;
    readonly VITE_AUTO_LOAD: boolean;
    readonly VITE_STORE_TIME_UNIT: TimeUnit;
    readonly VITE_AUTO_LOAD_SERVER: boolean;
    readonly VITE_ENABLE_MOCK: boolean;
    readonly VITE_PORT?: number;
    readonly VITE_STRICT_PORT?: boolean;
    readonly VITE_OPEN?: boolean;
    readonly VITE_HOST?: boolean;
}

interface ImportMetaEnv extends ViteEnv {

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}