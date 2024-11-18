//@ts-ignore
import { UserConfig } from "vite";
import createPlugins from "./plugins";
import createAlias from "./alias";
import {ViteEnv} from '../types/vite-env';
import createServer from "./server";
function createViteConfig(viteEnv: ViteEnv, isBuild: boolean, _option?: UserConfig) {

    const config: UserConfig = {
        plugins: createPlugins(viteEnv, isBuild),
        resolve: {
            alias: createAlias()
        },
        server: createServer(viteEnv),
        define: {
            // enable hydration mismatch details in production build
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
        }
    }

    return config;
}

export default createViteConfig;