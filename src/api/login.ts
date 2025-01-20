import request from "@/plugins/axios";
import { MessagePlugin } from "tdesign-vue-next";

export function login(data: LoginRequest) {
    if(!['admin', 'user'].includes(data.username)) {
        MessagePlugin.error('用户名或密码输入错误');
        return Promise.reject('用户名或密码输入错误');
    } else {
        if(data.password !== '123456') {
            MessagePlugin.error('用户名或密码输入错误');
            return Promise.reject('用户名或密码输入错误');
        }
    }
    return request.post<User>('/api/login', data, {loading: true, loadingText: '正在登录，请稍后...'});
}