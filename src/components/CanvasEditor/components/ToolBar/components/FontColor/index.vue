<script setup lang='ts'>
import { ref } from 'vue';

const emits = defineEmits(['click']);

const color= ref('#000');

function handleClick() {
    emits('click', { key: 'executeColor', value: color.value });
}

</script>

<template>
    <t-tooltip content="字体颜色">
        <t-popconfirm @confirm="handleClick" trigger="click">
            <t-button variant="text" size="small">
                <div class="flex items-center">
                    <t-icon name="palette"></t-icon>
                </div>
            </t-button>
            <template #content>
                <t-color-picker-panel v-model="color" :colorModes="['monochrome']" format="HEX"/>
            </template>
            <template #icon>
                <div></div>
            </template>
        </t-popconfirm>
    </t-tooltip>
</template>

<style lang='scss'></style>