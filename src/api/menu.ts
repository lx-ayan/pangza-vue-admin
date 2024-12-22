import request from "@/plugins/axios";
import { MenuResult } from "@t/api/menu";

export function getUserMenu() {
    return request.get<MenuResult[]>('/api/menu');
}