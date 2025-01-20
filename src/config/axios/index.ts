import { Router } from "vue-router";
import { MessagePlugin } from "tdesign-vue-next";
import axiosEmitter from "@/plugins/axios/AxiosEmitter";

export function axiosHandler(router: Router) {
    axiosEmitter.listen('SERVER_ERROR', (msg?: string) => {
        const message = msg || '服务端异常！';
        router.push({
            path: '/500',
            query: {
                message
            }
        });
        MessagePlugin.error(message);
    });

    axiosEmitter.listen('NOT_FOUND', () => {
        const message = '未找到访问资源！';
        router.push({
            path: '/404',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('NO_PERMISSION', () => {
        const message = '权限不足！';
        router.push({
            path: '/403',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('GATEWAY_ERROR', () => {
        const message = '网关异常！';
        router.push({
            path: '/500',
            query: {
                message
            }
        })
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('PARAM_ERROR', () => {
        const message = '参数异常！';
        MessagePlugin.error(message);
    })

    axiosEmitter.listen('INVALID_TOKEN', () => {
        const message = '登录失效，请重新登录！';
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
        const message = '未知错误！';
        MessagePlugin.error(message);
    })
}