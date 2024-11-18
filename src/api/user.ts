import request from "@/plugins/axios";

export function login(data: LoginForm) {
    return request.post<LoginResult | undefined>('/api/login', data);
}

export function testDemo() {
    return request.get('/api/article/1');
}