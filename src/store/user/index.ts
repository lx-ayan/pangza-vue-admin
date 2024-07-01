import piniaPersistedState from "@/config/pinia";
import { defineStore } from "pinia";
import tagStore from "../tag";
import storeUtil from "@/utils/store";
import { StoreEnum } from "@/common/enums";
import { MessagePlugin } from "tdesign-vue-next";
import router from "@/router";
import { hideFullLoading, showFullLoading } from "@/config/loading";

const userStore = defineStore('userStore', {
    state: () => ({
        user: undefined as LoginResult | undefined
    }),
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    actions: {
        setUser(user: LoginResult | undefined) {
            this.user = user;
        },
        logout() {
            showFullLoading('正在退出，请稍后...');
            const useTagStore = tagStore();
            storeUtil.remove(StoreEnum.TOKEN);
            this.user = undefined;
            useTagStore.removeAll();
            MessagePlugin.success('退出成功');
            hideFullLoading();
            router.replace('/login');
            router.getRoutes().forEach(item => {
                if (item.path != '/login' && item.path != '/') {
                    router.removeRoute(item.name!);
                }
            });
        }
    },
    persist: piniaPersistedState('userStore')
});


export default userStore;