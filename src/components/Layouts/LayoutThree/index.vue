<script setup lang='ts'>
import Header from '@/components/Header/index.vue';
import Menu from '@/components/Menu/index.vue';
import themeStore from '@/store/theme';
import ThemeDrawer from '@/components/ThemeDrawer/index.vue';
const useThemeStore = themeStore();
</script>

<template>
    <div class="h-full overflow-hidden">
        <t-layout class="h-full">
            <t-header class="flex items-center">
                <div class="w-[80%]">
                    <Menu />
                </div>
                <div class="flex-1 flex justify-end">
                    <Header />
                </div>
            </t-header>
            <t-content class="h-full">
                <ThemeDrawer />
                <div class=" overflow-auto h-full p-3">
                    <router-view class="h-full" #default="{ Component }">
                        <Transition v-if="useThemeStore.animate" :name="useThemeStore.animateName" mode="out-in">
                            <component :is="Component"></component>
                        </Transition>
                        <component v-else :is="Component"></component>
                    </router-view>
                </div>

            </t-content>
        </t-layout>
    </div>
</template>

<style lang='scss'></style>