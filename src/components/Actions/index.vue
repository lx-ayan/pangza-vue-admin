<script setup lang='ts'>
import { themeStore, userStore } from '@/store';
import { getCurrentUser } from '@/utils/security';
import { DialogPlugin } from 'tdesign-vue-next';
import { computed } from 'vue';
import ThemeButton from '@/components/ThemeButton/index.vue';
import ThemeDrawer from '../ThemeDrawer/index.vue';
import ScreenButton from '../ScreenButton/index.vue';
import { useRouter } from 'vue-router';
const useThemeStore = themeStore();
const user = getCurrentUser();
const useUserStore = userStore();
const router = useRouter();

const userActions = computed(() => ({
    userCenter: '用户中心',
    logout: '退出登录'
}))



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