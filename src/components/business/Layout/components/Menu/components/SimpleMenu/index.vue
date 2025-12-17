<script setup lang='ts'>
import useTabStore from '@/store/tabStore';
import useThemeStore from '@/store/themeStore';
import type { MenuResult } from '@/types/api/menu';
import { useRouter } from 'vue-router';

const router = useRouter();

const themeStore = useThemeStore();

const tabStore = useTabStore();

const props = defineProps<{
    list: MenuResult[]
}>();

function handleMenuClick(menu: MenuResult) {
    if (menu.meta && menu.meta.link) {
        if (menu.meta.href) {
            window.open(menu.meta.href);
        }
    } else {
        router.push({ name: menu.name });
        tabStore.addTab({
            title: menu.meta.title || '未命名',
            url: menu.path,
            closeable: menu.path !== '/home'
        });
        tabStore.setActiveTab(menu.path);
    }
}

defineOptions({
    name: 'SimpleMenu'
});
</script>
<template>
    <template v-for="menu in props.list">
        <t-submenu :value="menu.path" v-if="menu.children && menu.children.length && menu.meta.hidden !== true"
            :title="menu.meta?.title">
            <template v-if="menu.meta?.icon" #icon>
                <MyIcon :size="themeStore.isCollapsed ? 24 : 18" class="mr-2" :name="menu.meta.icon"></MyIcon>
            </template>
            <SimpleMenu :list="menu.children"></SimpleMenu>
        </t-submenu>
        <t-menu-item @click="() => handleMenuClick(menu)" :value="menu.path" v-else-if="menu.meta.hidden !== true">
            <template v-if="menu.meta?.icon" #icon>
                <MyIcon :size="themeStore.isCollapsed ? 24 : 18" class="mr-2" :name="menu.meta.icon"></MyIcon>
            </template>
            {{ menu.meta?.title }}
        </t-menu-item>
    </template>
</template>