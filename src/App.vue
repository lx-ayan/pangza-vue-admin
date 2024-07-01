<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import useTheme from './hooks/useTheme';
import themeStore from './store/theme';

const [initTheme] = useTheme();
const useThemeStore = themeStore();

const style = computed<CSSProperties>(() => {
  return useThemeStore.gray ? {
    filter: 'grayscale(100%)'
  } : {}
})

initTheme();
</script>

<template>
  <router-view :style class=" min-w-[1040px]"></router-view>
</template>

<style>
.v-contextmenu-inner .v-contextmenu-item {
  color: var(--td-text-color-primary);
  text-align: left;
  padding: 0;
  border-radius: 2px;
  transition: all .3s;
}

.v-contextmenu-item--hover {
  color: #fff !important;
  background-color: var(--td-brand-color) !important;
}

.v-contextmenu {
  background-color: var(--td-bg-color-container) !important;
  border: none !important;
  box-shadow: none !important;
}

</style>
