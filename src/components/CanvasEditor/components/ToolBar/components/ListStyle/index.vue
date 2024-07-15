<script setup lang='ts'>
import { ListType } from '@hufe921/canvas-editor';

const emits = defineEmits(['click']);

function handleClick() {
    emits('click', {
        key: 'executeList', value: ListType.UL
    });
}

</script>

<template>
    <t-tooltip content="列表1">
        <t-button @click="handleClick" variant="text" size="small">
            <div class="flex items-center">
                <t-icon name="bulletpoint"></t-icon>
            </div>
        </t-button>
    </t-tooltip>
</template>
