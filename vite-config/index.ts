import { UserConfig } from "vite";
import setupPlugins from "./plugins";
import setupServer from "./server";
import setupAlias from "./alias";
import createBuild from "./build";

export default function createConfig(env: ViteEnv, buildAble: boolean): UserConfig {
    const viteConfig: UserConfig = {
        plugins: setupPlugins(env, buildAble),
        resolve: {
            alias: setupAlias()
        },
        server: setupServer(env),
        build: createBuild(),
        base: './'
    }
    return viteConfig;
}