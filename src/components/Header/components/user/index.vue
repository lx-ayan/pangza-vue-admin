<script setup lang='tsx'>
import userStore from '@/store/user';
import { DropdownOption } from 'tdesign-vue-next';

const options = [
    { content: '个人中心', value: 1, prefixIcon: () => <t-icon name="user"></t-icon> as any },
    { content: '退出登录', value: 2, prefixIcon: () => <t-icon name="logout"></t-icon> as any }
];

const useUserStore = userStore();

function handleClick(data: DropdownOption) {
    const { value } = data;
    console.log('value',value);
    if (value === 2) {
        useUserStore.logout();
    }
}

</script>

<template>
    <t-dropdown @click="handleClick" :options>
        <div class="flex items-center cursor-pointer">
            <t-avatar :image="useUserStore.getUser?.header" :hide-on-load-failed="false">
                <span>{{ useUserStore.getUser?.username[0] }}</span>
            </t-avatar>
            <div class="ml-3">
                {{ useUserStore.getUser?.username }}
            </div>
        </div>
    </t-dropdown>

</template>

<style lang='scss'></style>