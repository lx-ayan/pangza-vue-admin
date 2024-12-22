<script setup lang='ts'>
import { setGlobalLanguage, t } from '@/plugins';
import { themeStore, userStore } from '@/store';
import { getCurrentUser } from '@/utils/security';
import { DialogPlugin, DropdownOption } from 'tdesign-vue-next';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { ACTIONS_USER_CENTER, ACTIONS_LOGOUT } from '@/common/lang';
import ThemeButton from '@/components/ThemeButton/index.vue';
import ThemeDrawer from '../ThemeDrawer/index.vue';
import ScreenButton from '../ScreenButton/index.vue';
import { useRouter } from 'vue-router';
const i18n = useI18n();
const useThemeStore = themeStore();
const user = getCurrentUser();
const useUserStore = userStore();
const router = useRouter();

const userActions = computed(() => ({
    userCenter: t(ACTIONS_USER_CENTER),
    logout: t(ACTIONS_LOGOUT)
}))

function handleLangClick(data: DropdownOption) {
    useThemeStore.setLang(data.value == 2 ? 'en' : 'zh');
    setGlobalLanguage(data.value == 2 ? 'en' : 'zh');
    i18n.locale.value = data.value == 2 ? 'en' : 'zh';
}



const dropdownObj = {
    1: () => {
        router.push('/usercenter');
    },
    2: () => {
        const instance = DialogPlugin.confirm({
            theme: 'warning',
            header: '系统提示',
            body: '正在进行退出登录操作，是否继续？',
            onConfirm: () => {
                useUserStore.logout();
                instance.destroy();
            }
        })
    }
}

function handleClick({ value }: any) {
    dropdownObj[value]();
}

</script>

<template>
    <div class="flex items-center">
        <ScreenButton v-if="useThemeStore.screen" />
        <ThemeDrawer />
        <ThemeButton />
        <t-dropdown @click="handleLangClick" trigger="click"
            :options="[{ content: '简体中文', value: 1 }, { content: 'English', value: 2 }]">
            <t-button variant="text">
                <t-icon name="translate"></t-icon>
            </t-button>
        </t-dropdown>
        <t-dropdown trigger="click" @click="handleClick"
            :options="[{ content: userActions.userCenter, value: 1 }, { content: userActions.logout, value: 2 }]">

            <t-button variant="text">
                <template #icon>
                    <t-avatar size="small" :image="user.header" :hide-on-load-failed="false" />
                </template>
                <span class="ml-3">{{ user.username }}</span>
                <template #suffix> <t-icon name="chevron-down" size="16" /></template>
            </t-button>
        </t-dropdown>
    </div>
</template>

<style lang='scss'></style>