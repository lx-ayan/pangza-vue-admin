import { LOGIN_ERROR, LOGIN_LOADING } from "@/common/lang";
import { t } from "@/plugins";
import request from "@/plugins/axios";
import { MessagePlugin } from "tdesign-vue-next";

export function login(data: LoginRequest) {
    if(!['admin', 'user'].includes(data.username)) {
        MessagePlugin.error(t(LOGIN_ERROR));
        return Promise.reject(t(LOGIN_ERROR));
    } else {
        if(data.password !== '123456') {
            MessagePlugin.error(t(LOGIN_ERROR));
            return Promise.reject(t(LOGIN_ERROR));
        }
    }
    return request.post<User>('/api/login', data, {loading: true, loadingText: t(LOGIN_LOADING)});
}