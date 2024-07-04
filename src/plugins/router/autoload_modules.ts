import { RouteRecordRaw } from "vue-router";

export default function autoloadByModules() {
    const modules = import.meta.glob('../../router/modules/**/index.ts', { eager: true }) as Record<string, { default: RouteRecordRaw }>;
    const routes: RouteRecordRaw[] = [];
    Object.keys(modules).forEach(key => {
        routes.push(setParentMeta(modules[key].default));
    })

    return routes;
}

function setParentMeta(route: RouteRecordRaw) {
    if(route.children) {
        route.children.forEach(_route => {
            _route.meta!.parentMeta = route;
            if(_route.children && _route.children.length) {
                setParentMeta(_route);
            }
        })
    }
    return route;
}