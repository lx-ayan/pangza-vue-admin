import useRequest from "@/hooks/core/useRequest";
import type { MenuResult } from "@/types/api/menu";

const request = useRequest('/api/user')

export function getUserRouter() {
    return request.post<MenuResult[]>('/router');
}