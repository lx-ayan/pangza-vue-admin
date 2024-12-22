import { Plugin } from "vite";
import Vue from '@vitejs/plugin-vue';
import VueJSX from '@vitejs/plugin-vue-jsx';
import VueSVG from 'vite-svg-loader';
export default function setupPlugins(_viteEnv: ViteEnv, _buildAble: boolean): Plugin[] {
    const pluginList = [
        Vue(),
        VueJSX(),
        VueSVG()
    ]
    return pluginList;
}