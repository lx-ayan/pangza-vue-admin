import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import ProComponent from 'procomponent-tdesign-vue';
import 'procomponent-tdesign-vue/lib/es/style/index.css';
import { App } from 'vue';

export function setupTDesign(app: App) {
    app.use(TDesign);
    app.use(ProComponent);
}