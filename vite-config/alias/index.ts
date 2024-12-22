import { resolve } from "path";
import { AliasOptions } from "vite";

function parseUrl(url: string) {
    return resolve(__dirname, `../../${url}`);
}

function setupAlias(): AliasOptions {
    return {
        '@': parseUrl('src'),
        '@t': parseUrl('types'),
        '@v': parseUrl('vite-config'),
    }
}

export default setupAlias;