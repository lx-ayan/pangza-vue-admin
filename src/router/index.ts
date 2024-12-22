import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { App } from "vue";
import guard from '@/plugins/router/RouterGuard';
const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export function setupRouter(app: App) {
    app.use(router);
    guard(router);
}

export default router;