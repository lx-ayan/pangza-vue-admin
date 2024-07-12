<script setup lang='ts'>
// import { TextDecorationStyle } from '@hufe921/canvas-editor';
const emits = defineEmits(['click']);

function handleClick() {
    emits('click', { key: 'executeUnderline', value: undefined });
}

</script>

<template>
    <t-tooltip content="下划线">
        <t-button @click="handleClick" variant="text" size="small">
            <div class="flex items-center">
                <t-icon name="textformat-underline"></t-icon>
            </div>
        </t-button>
    </t-tooltip>
</template>

<style lang='scss'></style>