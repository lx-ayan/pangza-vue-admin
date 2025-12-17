import { setPiniaPersistedStateConfig } from "@/config/pinia.config";
import { defineStore } from "pinia";
import { login as userLogin } from '@/api/user';
import { ref } from "vue";
import { useRouter } from "vue-router";
import { MessagePlugin } from "tdesign-vue-next";
import { getUserRouter } from "@/api/menu";
import type { MenuResult } from "@/types/api/menu";

const useUserStore = defineStore('user', () => {

    const router = useRouter();

    const token = ref('');

    const permission = ref<string | string[]>([]);

    const userInfo = ref<Nullable<LoginResult>>();

    const menuList = ref<MenuResult[]>([]);

    function setToken(_t: string) {
        token.value = _t;
    }

    function getToken() {
        return token.value;
    }

    function setPermission(_p: string | string[]) {
        permission.value = _p;
    }

    function getPermission() {
        return permission.value;
    }

    function login(data: LoginDTO) {
        userLogin(data).then(res => {
            afterLogin(res);
        }).catch(e => {
            MessagePlugin.error(e);
        })
    }

    function afterLogin(result: LoginResult) {
        setToken(result.token);
        setUserInfo(result);
        setPermission(result.permission as string[]);
        getUserRouter().then(res => {
            menuList.value = res;
            router.push('/home');
        })
    }

    function setUserInfo(result: LoginResult) {
        userInfo.value = result;
    }

    function getUserInfo() {
        return userInfo.value;
    }

    return {
        token,
        permission,
        userInfo,
        menuList,
        setToken,
        getToken,
        setPermission,
        getPermission,
        login,
        setUserInfo,
        getUserInfo
    }
}, {
    persist: setPiniaPersistedStateConfig('user')
})

export default useUserStore;