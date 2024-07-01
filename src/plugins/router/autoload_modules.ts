import { RouteRecordRaw } from "vue-router";

export default function autoloadByModules() {
    const modules = import.meta.glob('../../router/modules/**/index.ts', { eager: true }) as Record<string, { default: RouteRecordRaw }>;
    const routes: RouteRecordRaw[] = [];
    Object.keys(modules).forEach(key => {
        routes.push(modules[key].default);
    })

    return routes;
}