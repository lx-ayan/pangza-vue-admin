<template>
    <div v-if="useThemeStore.tagView" class="border-t tag-view-container  flex items-end overflow-hidden min-w-[1040px]"
        :class="[useThemeStore.theme === 'dark' ? 'bg-[#242424] border-[#393939] ' : 'bg-white ']">
        <div class="tag-view-left" :class="[useThemeStore.theme === 'dark' ? ' border-[#393939]' : '']"
            @click="handlePreClick">
            <t-icon size="20" name="chevron-left"></t-icon>
        </div>
        <div ref="containerRef" class="tag-view-inner">
            <div ref="tagRefs" @contextmenu="currentTag = item" v-contextmenu:contextmenu
                v-for="item in useTagStore.tagViewList" class="tag-view-item"
                :class="[$route.fullPath == item.path ? 'is-active' : '', useThemeStore.theme === 'dark' ? ' border-[#393939]' : '']">
                <template v-if="item.title.length >= 6">
                    <t-tooltip :content="item.title">
                        <div class="tag-view-item-inner">
                            <div @click="handleToPage(item)" class=" text-nowrap">
                                {{ item.title.slice(0, 6) + '...' }}
                            </div>
                            <div @click="handleClickClose(item)" v-if="item.close" class="ml-2 pb-[2px] cursor-pointer">
                                <t-icon size="16" name="close"></t-icon>
                            </div>
                        </div>
                    </t-tooltip>
                </template>
                <template v-else>
                    <div class="tag-view-item-inner">
                        <div @click="handleToPage(item)" class=" text-nowrap">
                            {{ item.title }}
                        </div>
                        <div @click="handleClickClose(item)" v-if="item.close" class="ml-2 pb-[2px] cursor-pointer">
                            <t-icon size="16" name="close"></t-icon>
                        </div>
                    </div>
                </template>
            </div>
        </div>

        <div @click="handleRefresh" class="tag-view-reload"
            :class="[useThemeStore.theme === 'dark' ? ' border-[#393939]' : '']">
            <t-icon size="15" name="refresh"></t-icon>
        </div>
        <t-dropdown @click="clickHandler" :options="contentList">
            <div :class="[useThemeStore.theme === 'dark' ? ' border-[#393939]' : '']" class="tag-view-more">
                <t-icon size="20" name="chevron-down"></t-icon>
            </div>
        </t-dropdown>



        <div @click="handleNextClick" class="tag-view-right"
            :class="[useThemeStore.theme === 'dark' ? ' border-[#393939]' : '']">
            <t-icon size="20" name="chevron-right"></t-icon>
        </div>
        <v-contextmenu ref="contextmenu">
            <div class="px-1">
                <v-contextmenu-item>
                    <div @click="handleRefresh" class="w-[142px] flex items-center p-1 py-[6px]">
                        <t-icon size="17" name="refresh"></t-icon><span class="ml-2">重新加载</span>
                    </div>
                </v-contextmenu-item>
                <v-contextmenu-item>
                    <div @click="handleCloseCurrent" class="w-[142px] flex items-center p-1 py-[6px]">
                        <t-icon size="17" name="close"></t-icon><span class="ml-2">关闭当前</span>
                    </div>
                </v-contextmenu-item>
                <v-contextmenu-item>
                    <div @click="handleRemoveAll" class="w-[142px] flex items-center p-1 py-[6px]">
                        <t-icon size="17" name="minus"></t-icon><span class="ml-2">关闭全部</span>
                    </div>
                </v-contextmenu-item>
                <v-contextmenu-item>
                    <div @click="handleClickOther" class="w-[142px] flex items-center p-1 py-[6px]">
                        <t-icon size="17" name="delete"></t-icon><span class="ml-2">关闭其他</span>
                    </div>
                </v-contextmenu-item>
            </div>
        </v-contextmenu>
    </div>
</template>

<script setup lang="tsx">
import tagStore from '@/store/tag';
import themeStore from '@/store/theme';
import { TagView } from '@t/global';
import { NotifyPlugin } from 'tdesign-vue-next';
import { ref, computed, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const STATIC_TAGVIEW = { title: '控制台', close: false, path: '/home' };

const useThemeStore = themeStore();

const contentList = [
    //@ts-ignore
    { content: '重新加载', value: 1, prefixIcon: () => <t-icon name='refresh'> </t-icon> as any },
    //@ts-ignore
    { content: '关闭当前', value: 2, prefixIcon: () => <t-icon name='close'> </t-icon> as any },
    //@ts-ignore
    { content: '关闭全部', value: 3, prefixIcon: () => <t-icon name='minus'> </t-icon> as any },
    //@ts-ignore
    { content: '关闭其他', value: 4, prefixIcon: () => <t-icon name='delete'> </t-icon> as any }
]

const tagRefs = ref();

const useTagStore = tagStore();

const route = useRoute();

const router = useRouter();

const containerRef = ref();

const contextmenu = ref();

const currentTag = ref<TagView | undefined>();

nextTick(() => {
    if (clickIndex.value != -1) {
        const offsetLeft = (tagRefs.value[clickIndex.value] as HTMLDivElement).offsetLeft;
        if (offsetLeft) {
            containerRef.value.scrollLeft = offsetLeft;
        }
    }
})

function handleClickClose(tag: TagView) {
    useTagStore.removeTag(tag);
}

function handleToPage(tag: TagView) {
    if (tag.path != route.fullPath) {
        router.push(tag.path);
    }
}

function handlePreClick() {
    if (clickIndex.value > 0) {
        router.push(useTagStore.tagViewList[clickIndex.value - 1].path);
    }
    containerRef.value.scrollLeft -= (tagRefs.value[clickIndex.value].clientWidth) + 8;
}

function handleNextClick() {
    if (clickIndex.value != useTagStore.tagViewList.length - 1) {
        router.push(useTagStore.tagViewList[clickIndex.value + 1].path);
    }
    containerRef.value.scrollLeft += (tagRefs.value[clickIndex.value].clientWidth) + 8;
}

function handleRefresh() {
    window.location.reload();
}

function handleCloseCurrent() {
    if (currentTag.value.path == '/home') {
        NotifyPlugin.error({
            title: '系统提示',
            content: '当前标签不可关闭',
            closeBtn: true
        })

        return;
    }
    useTagStore.removeTag(currentTag.value!);
    currentTag.value = undefined;
}

function handleRemoveAll() {
    useTagStore.setTagViewList([STATIC_TAGVIEW]);
    router.push('/home');
}

function handleClickOther() {
    if (route.fullPath === '/home') {
        handleRemoveAll();
    } else {
        const arr = useTagStore.tagViewList.filter(item => item.path == currentTag.value?.path);
        if (currentTag.value!.path != '/home') {
            arr.unshift(STATIC_TAGVIEW);
        }

        useTagStore.setTagViewList(arr);
        router.push(currentTag.value!.path);
    }
}

const arr = [handleRefresh, handleCloseCurrent, handleRemoveAll, handleClickOther]

function clickHandler(data: any) {
    currentTag.value = useTagStore.tagViewList.find(item => item.path == route.fullPath);
    arr[data.value - 1]();
}

const clickIndex = computed(() => {
    return useTagStore.tagViewList.findIndex(tag => tag.path == route.fullPath);
})

</script>

<style lang="scss">
.tag-view-container {
    @apply relative overflow-hidden h-10;
    user-select: none;
}

.tag-view-inner {
    @apply absolute left-8;
    width: calc(100% - 132px);
    padding: 0 4px;
    scroll-behavior: smooth;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
}

.tag-view-item {
    @apply mr-2 max-w-[160px] flex-1 flex-grow-0 flex-shrink-0 border px-2 h-8;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    line-height: 28px;

    &.is-active {
        @apply border-b-2 border-b-[var(--td-brand-color)] text-[var(--td-brand-color)];
    }
}

.tag-view-item-inner {
    @apply flex items-center flex-nowrap justify-between cursor-pointer;
}

.tag-view-left {
    @apply absolute left-0 w-8 flex items-center justify-center cursor-pointer h-8 border;
}

.tag-view-reload {
    @apply absolute right-16 w-8 flex items-center justify-center cursor-pointer h-8 border-x border-t border-b;
}

.tag-view-right {
    @apply absolute right-0 w-8 flex items-center justify-center cursor-pointer h-8 border-r border-t border-b;
}

.tag-view-more {
    @apply absolute right-8 w-8 flex items-center justify-center cursor-pointer h-8 border-r border-t border-b;
}
</style>