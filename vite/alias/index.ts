import { resolve } from "path";
import { AliasOptions } from "vite";

function parseUrl(url: string) {
    return resolve(__dirname, `../../${url}`);
}

function createAlias(): AliasOptions {
    return {
        '@': parseUrl('src'),
        '@t': parseUrl('types'),
        '@vite': parseUrl('vite'),
    }
}

export default createAlias;