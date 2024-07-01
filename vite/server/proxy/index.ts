import { ProxyOptions } from "vite";


type ViteProxyItem = [string, string, boolean];

type ViteProxyList = ViteProxyItem[];

type VitePrxoyTarget = Record<string, ProxyOptions>

const isHttpsRE = /^https:\/\//;


function createProxy(list: ViteProxyList = []): VitePrxoyTarget {

    const proxyOptions: VitePrxoyTarget = {};

    for (const [prefix, target, isRewrite] of list) {
        const isHttps = isHttpsRE.test(target);
        proxyOptions[prefix] = {
            target,
            changeOrigin: true,
            ws:true,
            rewrite: isRewrite ? ((path) => path.replace(new RegExp(`^${prefix}`), '')): undefined,
            ...(isHttps ? { secure: false } : {})
        }
    }

    return proxyOptions;
}

export default createProxy;