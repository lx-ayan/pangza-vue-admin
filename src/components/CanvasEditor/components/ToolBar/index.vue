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


const props = defineProps({
    toolBarConfig: {
        type: Array as PropType<ToolBarItem[]>,
        default: () => []
    }
})

const emits = defineEmits<{
    (e: 'change', data: ChangeData): void
}>();

function handleClick(data: ChangeData) {
    emits('change', data);
}
</script>

<template>
    <t-card v-if="props.toolBarConfig.length" size="small" class="mb-5" :bordered="false">
        <div class="flex items-center">
            <FontFamily @click="handleClick" v-if="toolBarConfig.includes('font-family')" />
            <FontSize @click="handleClick" v-if="toolBarConfig.includes('font-family')" />
            <FontSizeBig @click="handleClick" />
            <FontSizeSmall @click="handleClick" />
            <FormatClear @click="handleClick" />
            <FontBold @click="handleClick" />
            <FontItalic @click="handleClick" />
            <FontUnderline @click="handleClick" />
            <FontStrikethrough @click="handleClick" />
            <TextAlign @click="handleClick" v-if="toolBarConfig.includes('text-align')" />
            <t-divider layout="vertical" />
            <div>
            </div>
        </div>
    </t-card>
</template>
<style lang='scss'></style>