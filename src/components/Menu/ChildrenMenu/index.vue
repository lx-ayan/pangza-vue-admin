<template>
    <template v-for="item in props.list">
        <t-menu-item @click="() => handleClick(item)" :value="item.path"
            v-if="!item.children || (item.children && !item.children.length)">
            <template #icon v-if="item.meta?.icon">
                <t-icon :name="item.meta?.icon"></t-icon>
            </template>
            <span>
                {{ item.meta?.title }}
            </span>
        </t-menu-item>
        <template v-else>
            <t-submenu v-if="useThemeStore.menuType == 'normal'" :title="item.meta?.title" :value="item.path">
                <template #icon v-if="item.meta?.icon">
                    <t-icon :name="item.meta?.icon"></t-icon>
                </template>
                <ChildrenMenu :list="item.children" />
            </t-submenu>
            <t-menu-group v-else :title="item.meta?.title" :value="item.path">
                <template #icon v-if="item.meta?.icon">
                    <t-icon :name="item.meta?.icon"></t-icon>
                </template>
                <ChildrenMenu :list="item.children" />
            </t-menu-group>
        </template>
    </template>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import ChildrenMenu from '../ChildrenMenu/index.vue';
import { MenuMeta } from '@t/global';
import { useRouter } from 'vue-router';
import tagStore from '@/store/tag';
import themeStore from '@/store/theme';
import { RouteRecordNormalized } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

const router = useRouter();

const useTagStore = tagStore();

const useThemeStore = themeStore();

const props = defineProps({
    list: {
        type: Array as PropType<RouteRecordNormalized[] | RouteRecordRaw[]>,
        default: () => []
    }
})

function handleClick(data: RouteRecordNormalized | RouteRecordRaw) {
    const path = data.path;
    const { title, web, open, href } = data.meta as MenuMeta;
    if (web) {
        if (open) {
            window.open(href)
        } else {
            router.push(path + '?href=' + href);
            const tagPath = path + '?href=' + href;
            useTagStore.addTag({
                title,
                path: tagPath,
                close: true
            })
        }
    } else {
        router.push(data.path)
        useTagStore.addTag({
            title,
            path,
            close: true
        })
    }
}

</script>