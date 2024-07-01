<script setup lang='ts'>
import LayoutOne from '@/components/Layouts/LayoutOne/index.vue';
import LayoutTwo from '@/components/Layouts/LayoutTwo/index.vue';
import LayoutThree from '@/components/Layouts/LayoutThree/index.vue';

import themeStore from '@/store/theme';
const useThemeStore = themeStore();
</script>

<template>
    <div class="h-screen">
        <LayoutOne v-if="useThemeStore.layout == 'one'" />
        <LayoutTwo v-if="useThemeStore.layout == 'two'" />
        <LayoutThree v-if="useThemeStore.layout == 'three'" />
    </div>
</template>

<style lang='scss'>
@import url('@/assets/css/router-animate.scss');
</style>