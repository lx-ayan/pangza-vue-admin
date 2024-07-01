<script setup lang='ts'>
import User from './components/user/index.vue';
import Breads from './components/breads/index.vue';
import ThemeDrawer from '@/components/ThemeDrawer/index.vue';
import themeStore from '@/store/theme';
import SearchMenu from '@/components/SearchMenu/index.vue';
import Screen from '@/components/Screen/index.vue';
const useThemeStore = themeStore();

function handleCollapsedClick() {
    useThemeStore.setThemeByKey('isCollapsed', !useThemeStore.isCollapsed);
}

</script>

<template>
    <div class="flex items-center h-full px-2 justify-between">
        <div v-if="useThemeStore.layout !== 'three'" class="flex items-center">
            <div v-if="useThemeStore.collapsed" class="mr-3">
                <t-button @click="handleCollapsedClick" variant="text">
                    <template #icon>
                        <t-icon :name="!useThemeStore.isCollapsed ? 'menu-unfold' : 'menu-fold'"></t-icon>
                    </template>
                </t-button>
            </div>

            <Breads />
        </div>
        <div class="flex items-center">
            <User />
            <SearchMenu v-if="useThemeStore.menu" />
            <Screen v-if="useThemeStore.screen" />
            <ThemeDrawer />
        </div>
    </div>
</template>

<style lang='scss'></style>