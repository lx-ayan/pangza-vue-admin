import { createApp } from 'vue'
import App from './App.vue';
import router, { setupRouter } from './router';
import '@/assets/index.css';
import { setupPlugins } from './plugins';
const app = createApp(App);
setupPlugins(app);
setupRouter(app);
app.mount('#app');
