<script setup lang='ts'>
import useUserStore from '@/store/userStore';
import SimpleMenu from './components/SimpleMenu/index.vue';
import { useRoute } from 'vue-router';
import useThemeStore from '@/store/themeStore';
import Logo from '../Header/components/Logo/index.vue';

const themeStore = useThemeStore();

const userStore = useUserStore();

const route = useRoute();
</script>
<template>
    <t-menu :theme="themeStore.menuTheme" class="h-full" v-model:collapsed="themeStore.isCollapsed"
        :value="route.fullPath">
        <template v-if="themeStore.layout == '2'" #logo>
            <Logo />
        </template>
        <SimpleMenu :list="userStore.menuList" />
    </t-menu>
</template>

<style>
.t-menu__logo:not(:empty) {
    border-bottom: none !important;
}
</style>