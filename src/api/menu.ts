import request from "@/plugins/axios";
import { MenuResult } from "@t/menu";

export function getUserMenu() {
    return request.get<MenuResult[]>('/api/menu');
}