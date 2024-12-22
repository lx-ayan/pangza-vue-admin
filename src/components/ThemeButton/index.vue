<script setup lang='ts'>
import { themeStore } from '@/store';
import { ref } from 'vue';
const useThemeStore = themeStore();

const isDark = ref(useThemeStore.theme === 'dark');

function handleClick(e: MouseEvent) {
    isDark.value = !isDark.value;
    useThemeStore.setTheme(isDark.value === true? 'dark': 'light', e)
}

</script>

<template>
    <div>
        <t-button @click="handleClick" variant="text">
            <t-icon :name="isDark ? 'moon' : 'sunny'"></t-icon>
        </t-button>
    </div>
</template>

<style lang='scss'></style>