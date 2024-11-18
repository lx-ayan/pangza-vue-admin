import { ServerOptions } from "vite";
import { ViteEnv } from "../../types/vite-env";
import createProxy from "../proxy";

export default function createServer(viteEnv: ViteEnv): ServerOptions {
    const { VITE_PROXY, VITE_PORT = 5173, VITE_STRICT_PORT=false, VITE_OPEN = false, VITE_HOST = true } = viteEnv;

    const server: ServerOptions = {
        port: VITE_PORT,
        proxy: createProxy(VITE_PROXY),
        strictPort: VITE_STRICT_PORT,
        open: VITE_OPEN,
        host: VITE_HOST
    }

    return server;
}