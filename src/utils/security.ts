import { StoreEnum } from "@/common/enums";
import storeUtil from "./store";
import userStore from "@/store/user";

export function getToken() {
    return storeUtil.get<string>(StoreEnum.TOKEN);
}

export function getCurrentUser(): LoginResult | undefined {
    const useUserStore = userStore();
    return useUserStore.getUser;
}

export function hasPermission(permission: string | string[]) {
    const user = getCurrentUser();
    if (!user) return false;
    if(!permission) return true;

    let innerPermission: string[] = [];

    if (!Array.isArray(permission)) {
        innerPermission = permission.split(',');
    }

    const result: boolean[] = [];

    innerPermission.forEach(_permission => {
        result.push(user.permission!.includes(_permission));
    })

    return result.some(item => item);
}