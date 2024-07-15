<script setup lang='ts'>
import { ChangeData, ToolBarItem } from '@t/canvas-editor';
import { PropType } from 'vue';
import FontFamily from './components/FontFamily';
import TextAlign from './components/TextAlign';
import FontSize from './components/FontSize';
import FontSizeBig from './components/FontSizeBig/index.vue';
import FontSizeSmall from './components/FontSizeSmall/index.vue';
import FormatClear from './components/FormatClear/index.vue';
import FontBold from './components/FontBold/index.vue';
import FontItalic from './components/FontItalic/index.vue';
import FontUnderline from './components/FontUnderline/index.vue';
import FontStrikethrough from './components/FontStrikethrough/index.vue';
import FontColor from './components/FontColor/index.vue';
import FontBGColor from './components/FontBGColor/index.vue';
import ListStyle from './components/ListStyle/index.vue';
import ListStyleTwo from './components/ListStyleTwo/index.vue';
import RowMargin from './components/RowMargin/index.vue';
import Table from './components/Table/index.vue';
import Image from './components/Image/index.vue';
import Print from './components/Print/index.vue';

const props = defineProps({
    toolBarConfig: {
        type: Array as PropType<ToolBarItem[]>,
        default: () => []
    }
});

const emits = defineEmits<{
    (e: 'change', data: ChangeData): void
}>();

function handleClick(data: ChangeData) {
    emits('change', data);
}
</script>

<template>
    <t-card size="small" class="mb-5" :bordered="false">
        <div class="flex items-center">
            <FontFamily @click="handleClick" />
            <FontSize @click="handleClick" />
            <t-divider layout="vertical" />
            <FontSizeBig @click="handleClick" />
            <FontSizeSmall @click="handleClick" />
            <t-divider layout="vertical" />
            <FontBold @click="handleClick" />
            <FontItalic @click="handleClick" />
            <FontUnderline @click="handleClick" />
            <FontStrikethrough @click="handleClick" />
            <FontColor @click="handleClick" />
            <FontBGColor @click="handleClick" />
            <FormatClear @click="handleClick" />
            <t-divider layout="vertical" />
            <TextAlign @click="handleClick" />
            <t-divider layout="vertical" />
            <ListStyle @click="handleClick" />
            <ListStyleTwo @click="handleClick" />
            <t-divider layout="vertical" />
            <RowMargin @click="handleClick" />
            <Table @click="handleClick" />
            <Image @click="handleClick" />
            <t-divider layout="vertical" />
            <Print @click="handleClick" />
            <div>
            </div>
        </div>
    </t-card>
</template>
<style lang='scss'></style>