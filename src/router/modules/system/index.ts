import { ROUTER_SYSTEM, ROUTER_SYSTEM_LOG } from "@/common/lang";
import { t } from "@/plugins";
import { RouteRecordRaw } from "vue-router";

export default {
    path: '/system',
    name: 'system',
    redirect: '/system/log',
    meta: {
        title: t(ROUTER_SYSTEM),
        auth: true,
        show: true
    },
    children: [
        {
            path: '/system/log',
            name: 'system.log',
            meta: {
                title: t(ROUTER_SYSTEM_LOG),
                auth: true,
                show: true
            },
            component: () => import('@/views/system/log/index.vue')
        }
    ]
} as RouteRecordRaw