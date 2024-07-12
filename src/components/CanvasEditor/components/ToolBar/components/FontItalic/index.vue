<script setup lang='ts'>
const emits = defineEmits(['click']);

function handleClick() {
    emits('click', { key: 'executeItalic', value: undefined });
}

</script>

<template>
    <t-tooltip content="倾斜">
        <t-button @click="handleClick" variant="text" size="small">
            <div class="flex items-center">
                <t-icon name="textformat-italic"></t-icon>
            </div>
        </t-button>
    </t-tooltip>
</template>

<style lang='scss'></style>