import { hasPermission } from "@/utils/security";

export function usePermission(permission: string | string[]) {
    return hasPermission(permission);
}

