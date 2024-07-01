<script setup lang='ts'>
import { hideFullLoading, showFullLoading } from '@/config/loading';
import themeStore, { LayoutOption } from '@/store/theme';
const useThemeStore = themeStore();

function onChange(mode: LayoutOption) {
    if(mode === useThemeStore.layout) return;
    showFullLoading('正在切换布局，请稍后...');
    setTimeout(() => {
        useThemeStore.setLayout(mode);
        hideFullLoading()
    }, 500)
}

</script>

<template>
    <div class="flex items-center justify-between">
        <div @click="onChange('one')" class=" cursor-pointer flex items-center h-20 w-28 shadow-md rounded-md overflow-hidden" :class="useThemeStore.layout == 'one' ? ' border-2 border-[var(--td-brand-color)]': ''">
            <div class="aside w-5 h-full"></div>
            <div class="h-full flex-1">
                <div class="header h-4 w-full"></div>
                <div class="content w-full h-full"></div>
            </div>
        </div>

        <div @click="onChange('two')" class=" cursor-pointer h-20 w-28 shadow-md rounded-lg overflow-hidden" :class="useThemeStore.layout == 'two' ? ' border-2 border-[var(--td-brand-color)]': ''">
            <div class="aside w-full h-5"></div>
            <div class="flex h-full">
                <div class="header w-5"></div>
                <div class="content flex-1"></div>
            </div>
        </div>

        <div @click="onChange('three')" class=" cursor-pointer h-20 w-28 shadow-md  rounded-lg overflow-hidden" :class="useThemeStore.layout == 'three' ? ' border-2 border-[var(--td-brand-color)]': ''">
            <div class="aside h-5 w-full"></div>
            <div class="content h-full"></div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.aside {
    background: rgb(39, 51, 82);
}

.header {
    background: #fff;
}

.content {
    background: #f0f2f5;
}
</style>