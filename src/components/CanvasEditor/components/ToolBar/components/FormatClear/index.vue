<script setup lang='ts'>
const emits = defineEmits(['click']);

function handleClick() {
    emits('click', { key: 'executeFormat', value: undefined });
}

</script>

<template>
    <t-tooltip content="清除格式">
        <t-button @click="handleClick" variant="text" size="small">
            <t-icon name="clear-formatting"></t-icon>
        </t-button>
    </t-tooltip>
</template>

<style lang='scss'></style>