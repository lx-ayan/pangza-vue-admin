import { createPinia } from "pinia";
import { App } from "vue";
import PiniaStorage from 'pinia-plugin-persistedstate'
export function setupPinia(app: App) {
    const pinia = createPinia();
    pinia.use(PiniaStorage);
    app.use(pinia)
}