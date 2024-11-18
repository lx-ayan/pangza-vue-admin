import { PluginOption } from 'vite';
import Vue from '@vitejs/plugin-vue';
import setupMockPlugin from './mock';
import SVGLoader from 'vite-svg-loader';
import VueJSX from '@vitejs/plugin-vue-jsx';
import DefinePluginOption from 'unplugin-vue-define-options/vite';
import ViteCompression from 'vite-plugin-compression2';

function createPlugins(_viteEnv: ViteEnv, isBuild: boolean) {
    const pluginList: PluginOption = [Vue(), SVGLoader(), VueJSX(), ViteCompression()];
    if (_viteEnv.VITE_ENABLE_MOCK) {
        pluginList.push(setupMockPlugin(isBuild));
    }
    pluginList.push(DefinePluginOption());
    return pluginList;
}

export default createPlugins