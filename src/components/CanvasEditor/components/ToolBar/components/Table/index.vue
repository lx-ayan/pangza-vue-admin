<script setup lang='ts'>
import { ProFormOption } from 'tdesign-pro-component';
import { ref } from 'vue';

const emits = defineEmits(['click']);

const formOption: ProFormOption[] = [
    {
        name: 'row',
        type: 'number',
        label: '行',
        inputNumberAttrs: {
            style: 'width: 100%',
            theme: 'normal'
        }
    },
    {
        name: 'col',
        type: 'number',
        label: '列',
        inputNumberAttrs: {
            style: 'width: 100%',
            theme: 'normal'
        }
    }
]

const visible = ref(false);

function handleClick(value: { row: number, col: number }) {
    emits('click', {
        key: 'executeInsertTable', value
    });
    visible.value = false;
}

async function request() {
    return {
        row: 1,
        col: 1
    }
}

</script>

<template>
    <pro-modal header="设置行列" :request v-model:visible="visible" @submit="handleClick" :options="formOption">

    </pro-modal>
    <t-tooltip content="插入表格">
        <t-button @click="visible = true" variant="text" size="small">
            <t-icon name="table"></t-icon>
        </t-button>
    </t-tooltip>
</template>
