import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import ProComponent from 'tdesign-pro-component';
import 'tdesign-pro-component/index.css';
import { App } from 'vue';

export function setupTDesign(app: App) {
    app.use(TDesign);
    app.use(ProComponent);
}