import type { ProTableRequest, ProTableResult } from "@/components/ProComponents/ProTable/index.vue";
import useRequest from "@/hooks/core/useRequest";

const request = useRequest('/api/user');

export function login(data: LoginDTO) {
    return request.post<LoginResult>('/login', data);
}

export function getUserList(data: ProTableRequest) {
    return request.post<ProTableResult>('/list', data, { debounceOption: { wait: 200 } });
}

export function getRoleList(data: ProTableRequest) {
    return request.post<ProTableResult>('/roles', data);
}