import { ServerOptions } from "vite";
import { createProxy } from "../proxy";

function setupServer(env: ViteEnv): ServerOptions {
    const { VITE_PORT, VITE_PROXY } = env;
    const server = {
        port: VITE_PORT || 5173,
        host: true,
        open: false,
        strictPort: false,
        proxy: createProxy(VITE_PROXY!)
    }

    return server;
}

export default setupServer;