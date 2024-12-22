import { userStore } from "@/store";

export function hasPermission(permission: string | string[]) {
    const user = getCurrentUser();
    if (!user) return false;
    if (!user.permission) return false;
    if (!permission) return true;
    let innerPermission: string[] = [];

    if (!Array.isArray(permission)) {
        innerPermission = permission.split(',');
    } else {
        innerPermission = permission;
    }

    const result: boolean[] = [];

    innerPermission.forEach(_permission => {
        result.push(user.permission!.includes(_permission));
    });

    return result.some(item => item);
}

export function getCurrentUser(): User {
    const useUserStore = userStore();
    return useUserStore.getUser;
}

export function getToken() {
    const useUserStore = userStore();
    return useUserStore.getToken;
}