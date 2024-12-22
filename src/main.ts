import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { hello } from './utils/log';
import 'animate.css';
import '@/assets/css/index.css';
import '@/assets/css/router-animate.css';
import { setupPlugins } from './plugins';
import setupDirective from './directive';
hello();

function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    setupPlugins(app);
    setupDirective(app);
    return app;
}

bootstrap().mount('#app');

