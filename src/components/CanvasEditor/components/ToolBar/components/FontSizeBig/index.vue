<script setup lang='ts'>
const emits = defineEmits(['click']);

function handleClick() {
    emits('click', { key: 'executeSizeAdd', value: undefined });
}

</script>

<template>
    <t-tooltip content="增加字号">
        <t-button @click="handleClick" variant="text" size="small">
            <div class="flex items-center">
                <t-icon name="letters-a"></t-icon><span>+</span>
            </div>
        </t-button>
    </t-tooltip>
</template>

<style lang='scss'></style>