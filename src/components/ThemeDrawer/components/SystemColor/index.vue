<script setup lang='ts'>
import themeStore from '@/store/theme';
const useThemeStore = themeStore();
</script>

<template>
    <div class="flex items-center ">
        <div class="bg-white flex  mr-6 h-20 w-28 rounded-lg"  @click="() => useThemeStore.setTheme('light')" :class="useThemeStore.theme == 'light' ? ' border-2 border-[var(--td-brand-color)]': ''">
            <div class="w-5 border-r">

            </div>
            <div class="h-5 w-full border-b"  >
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>

        <div class="bg-[#333] flex  h-20 w-28 rounded-lg" @click="() => useThemeStore.setTheme('dark')" :class="useThemeStore.theme == 'dark' ? ' border-2 border-[var(--td-brand-color)]': ''">
            <div class="w-5 border-r border-gray-500">

            </div>
            <div class="h-5 w-full border-b border-gray-500">
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'></style>