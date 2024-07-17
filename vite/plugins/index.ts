import { PluginOption } from 'vite';
import Vue from '@vitejs/plugin-vue';
import setupMockPlugin from './mock';
import SVGLoader from 'vite-svg-loader';
import VueJSX from '@vitejs/plugin-vue-jsx';
import DefinePluginOption from 'unplugin-vue-define-options/vite';

function createPlugins(_viteEnv: ViteEnv, isBuild: boolean) {
    const pluginList: PluginOption = [Vue(), SVGLoader(), VueJSX()];
    pluginList.push(setupMockPlugin(isBuild));
    pluginList.push(DefinePluginOption());
    return pluginList;
}

export default createPlugins