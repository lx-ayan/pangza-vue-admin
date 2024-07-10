<script setup lang='ts'>
import Header from '@/components/Header/index.vue';
import Menu from '@/components/Menu/index.vue';
import TagView from '@/components/TagView/index.vue';
import useColor from '@/hooks/useColor';
import ThemeDrawer from '@/components/ThemeDrawer/index.vue';

const { useThemeStore, BG_COLOR } = useColor();

</script>

<template>
    <t-layout class="h-scrren overflow-hidden">
        <t-aside class="w-auto">
            <Menu />
        </t-aside>
        <t-layout>
            <t-header class="h-[60px]" v-if="useThemeStore.header">
                <Header />
            </t-header>
            <t-content class="h-scrren" :style="{background: BG_COLOR}">
                <ThemeDrawer v-if="!useThemeStore.header" />
                <TagView />
                <div style="height: 855px; overflow-y: auto; overflow-x: hidden;" class=" p-3">
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