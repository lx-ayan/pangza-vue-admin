<script setup lang='ts'>

const emits = defineEmits(['click']);

function handleClick() {
    emits('click', {
        key: 'executePrint', value: void 0
    });
}

</script>

<template>
    <t-tooltip content="打印">
        <t-button @click="handleClick" variant="text" size="small">
            <t-icon name="print"></t-icon>
        </t-button>
    </t-tooltip>
</template>
