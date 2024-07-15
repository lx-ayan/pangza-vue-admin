<script setup lang='ts'>
import { ProFormOption } from 'procomponent-tdesign-vue';
import { ref } from 'vue';

const emits = defineEmits(['click']);

const formOption: ProFormOption[] = [
    {
        name: 'value',
        label: '图片地址',
        rules: [{ required: true, message: '请输入图片地址' }],
        col: 12
    },
    {
        name: 'width',
        type: 'number',
        label: '宽度',
        inputNumberAttrs: {
            style: 'width: 100%',
            theme: 'normal'
        }
    },
    {
        name: 'height',
        type: 'number',
        label: '高度',
        inputNumberAttrs: {
            style: 'width: 100%',
            theme: 'normal'
        }
    }
]

const visible = ref(false);
function handleClick(value: { width: number, height: number, value: string }) {
    emits('click', {
        key: 'executeImage', value
    });
    visible.value = false;
}

async function request() {
    return {
        width: 200,
        height: 180,
        value: 'https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}

</script>

<template>
    <pro-modal header="插入图片" :request v-model:visible="visible" @submit="handleClick" :options="formOption">

    </pro-modal>
    <t-tooltip content="插入表格">
        <t-button @click="visible = true" variant="text" size="small">
            <t-icon name="image"></t-icon>
        </t-button>
    </t-tooltip>
</template>
