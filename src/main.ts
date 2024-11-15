import { createApp } from 'vue'
import App from './App.vue';
import { setupRouter } from './router';
import '@/assets/index.css';
import { setupPlugins } from './plugins';
import setupDirective from './directive';
const app = createApp(App);
setupPlugins(app);
setupRouter(app);
setupDirective(app);
app.mount('#app');

app.config.errorHandler = () => {
    console.log('vue error')
}
