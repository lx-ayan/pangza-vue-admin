import { hasPermission } from "@/utils/security";

function usePermission(permission: string | string[]) {
    return hasPermission(permission);
}

export default usePermission;