<script setup lang="ts">
import { themeStore } from '@/store';
const useThemeStore = themeStore();
function handleCollapsedClick() {
    useThemeStore.setCollapsed(!useThemeStore.collapsed);
}
</script>

<template>
    <t-button @click="handleCollapsedClick" variant="text">
        <template #icon>
            <t-icon :name="!useThemeStore.collapsed ? 'menu-unfold' : 'menu-fold'"></t-icon>
        </template>
    </t-button>
</template>