<script setup lang="ts">
import enConfig from 'tdesign-vue-next/es/locale/en_US';
import zhConfig from 'tdesign-vue-next/es/locale/zh_CN';
import { themeStore } from './store';
import { computed, CSSProperties, onMounted, ref } from 'vue';

const useThemeStore = themeStore();
const globalConfig = ref(useThemeStore.getLang !== 'en' ? zhConfig : enConfig);

onMounted(() => {
    useThemeStore.initTheme();
});

const style = computed<CSSProperties>(() => {
  return useThemeStore.gray ? {
    filter: 'grayscale(100%)'
  } : {}
});


</script>

<template>
    <t-config-provider :global-config="globalConfig">
        <RouterView :style></RouterView>
    </t-config-provider>
</template>

<style lang="scss">
::view-transition,
::view-transition-group {
    animation: none;
}
</style>
