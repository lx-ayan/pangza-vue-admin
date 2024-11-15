import guard from "@/plugins/router/RouterGuard";
import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export async function setupRouter(app: App) {
    app.use(router);
    guard(router);
}


export default router;