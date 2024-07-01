<script setup lang='ts'>
import Header from '@/components/Header/index.vue';
import Menu from '@/components/Menu/index.vue';
import TagView from '@/components/TagView/index.vue';
import themeStore from '@/store/theme';
import ThemeDrawer from '@/components/ThemeDrawer/index.vue';
const useThemeStore = themeStore();
</script>

<template>
    <t-layout  class="h-full overflow-y-hidden">
        <t-header v-if="useThemeStore.header">
            <Header />
        </t-header>
        <t-layout class="h-full overflow-y-hidden">
            <t-aside class="w-auto">
                <Menu />
            </t-aside>
            <t-content>
                <TagView />
                <ThemeDrawer v-if="!useThemeStore.header" />
                <div class="h-full p-3">
                    <router-view class="h-full" #default="{ Component }">
                        <Transition v-if="useThemeStore.animate" :name="useThemeStore.animateName" mode="out-in">
                            <component :is="Component"></component>
                        </Transition>
                        <component v-else :is="Component"></component>
                    </router-view>
                </div>
            </t-content>
        </t-layout>
    </t-layout>
</template>

<style lang='scss'></style>