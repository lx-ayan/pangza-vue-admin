<script setup lang='ts'>
import useThemeStore from '@/store/themeStore';
import LayoutOne from './components/Layout/LayoutOne/index.vue';
import LayoutTwo from './components/Layout/LayoutTwo/index.vue';

const themeStore = useThemeStore();

</script>

<template>
    <LayoutOne v-if="themeStore.layout === '1'">
    </LayoutOne>

    <LayoutTwo v-if="themeStore.layout === '2'">
    </LayoutTwo>
</template>
