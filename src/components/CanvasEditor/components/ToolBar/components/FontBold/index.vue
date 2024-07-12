<script setup lang='ts'>
const emits = defineEmits(['click']);

function handleClick() {
    emits('click', { key: 'executeBold', value: undefined });
}

</script>

<template>
    <t-tooltip content="加粗">
        <t-button @click="handleClick" variant="text" size="small">
            <div class="flex items-center">
                <t-icon name="textformat-bold"></t-icon>
            </div>
        </t-button>
    </t-tooltip>
</template>

<style lang='scss'></style>