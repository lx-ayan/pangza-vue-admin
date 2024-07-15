<script setup lang='ts'>
import { ListType } from '@hufe921/canvas-editor';
import { PropType } from 'vue';

const props = defineProps({
    type: String as PropType<ListType>
})

const emits = defineEmits(['click']);

function handleClick() {
    emits('click', {
        key: 'executeList', value: ListType.OL
    });
}

</script>

<template>
    <t-tooltip content="列表2">
        <t-button @click="handleClick" variant="text" size="small">
            <t-icon name="bulletpoint"></t-icon>
        </t-button>
    </t-tooltip>
</template>
