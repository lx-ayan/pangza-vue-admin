import { login as loginHandle } from "@/api/login";
import { piniaSotrageConfig } from "@/config";
import { defineStore } from "pinia";
import router from "@/router";
export const userStore = defineStore('user', {
    state: (): UserState => ({
        user: {
            username: ''
        },
        token: ''
    }),
    actions: {
        login(data: LoginRequest) {
            loginHandle(data).then(res => {
                this.user = { ...res, username: data.username, permission: data.username === 'user' ? ['ROLE_USER'] : res.permission };
                this.token = res.token;
                router.replace('/');
            })
        },
        logout() {
            this.user = { username: '' };
            this.token = '';
            router.replace('/login');
        }
    },
    getters: {
        getUser(): UserState['user'] {
            return this.user;
        },
        getToken(): string {
            return this.token || '';
        }
    },
    persist: piniaSotrageConfig('user')
})