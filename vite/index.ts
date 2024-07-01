import { UserConfig } from "vite";
import createPlugins from "./plugins";
import createAlias from "./alias";

function createVite(viteEnv: ViteEnv, isBuild: boolean, option?: UserConfig) {

    const config: UserConfig = {
        plugins: createPlugins(viteEnv, isBuild),
        resolve: {
            alias: createAlias()
        },
        define: {
            // enable hydration mismatch details in production build
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
        }
    }

    return config;
}

export default createVite;