import { Router } from "vue-router";
import { MessagePlugin } from "tdesign-vue-next";
import axiosEmitter from "@/plugins/axios/AxiosEmitter";
import { AXIOS_RESULT_400, AXIOS_RESULT_401, AXIOS_RESULT_403, AXIOS_RESULT_404, AXIOS_RESULT_500, AXIOS_RESULT_502, AXIOS_RESULT_DEFAULT } from "@/common/lang";
import { t } from "@/plugins";

export function axiosHandler(router: Router) {
    axiosEmitter.listen('SERVER_ERROR', (msg?: string) => {
        const message = msg || t(AXIOS_RESULT_500);
        router.push({
            path: '/500',
            query: {
                message
            }
        });
        MessagePlugin.error(message);
    });

    axiosEmitter.listen('NOT_FOUND', () => {
        const message = t(AXIOS_RESULT_404);
        router.push({
            path: '/404',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('NO_PERMISSION', () => {
        const message = t(AXIOS_RESULT_403);
        router.push({
            path: '/403',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('GATEWAY_ERROR', () => {
        const message = t(AXIOS_RESULT_502);
        router.push({
            path: '/500',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('PARAM_ERROR', () => {
        const message = t(AXIOS_RESULT_400);
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('INVALID_TOKEN', () => {
        const message = t(AXIOS_RESULT_401);
        localStorage.removeItem('user')
        router.push({
            path: '/login',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('DEFAULT', () => {
        const message = t(AXIOS_RESULT_DEFAULT);
        MessagePlugin.error(message);
    })
}