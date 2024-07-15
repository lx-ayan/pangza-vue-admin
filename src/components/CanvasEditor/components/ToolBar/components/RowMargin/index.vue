<script setup lang='ts'>

const contentsList = [
    { content: '1', value: '1' },
    { content: '1.25', value: '1.25' },
    { content: '1.5', value: '1.5' },
    { content: '1.75', value: '1.75' },
    { content: '2', value: '2' },
    { content: '2.5', value: '2.5' },
    { content: '3', value: '3' },
];

const emits = defineEmits(['click']);

function handleClick({ value }: any) {
    emits('click', {
        key: 'executeRowMargin', value
    });
}

</script>

<template>

    <t-tooltip content="行间距">
        <t-dropdown @click="handleClick" :options="contentsList">
            <t-button variant="text" size="small">
                <t-icon name="line-height"></t-icon>
            </t-button>
        </t-dropdown>

    </t-tooltip>
</template>
