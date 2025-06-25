<script setup lang='ts'>
import { ProTableOption } from 'tdesign-pro-component';
import { ref } from 'vue';

const option = ref<ProTableOption<any>[]>([
    {
        key: 'type',
        title: '类型',
        width: 100
    },
    {
        key: 'id',
        title: '编号',
        width: 100,
        hideInTable: true,
        hideInSearch: true
    }
])

async function request() {
    return {
        success: true,
        list: [],
        total: 30
    }
}
</script>

<template>
    <div>
        <ProTable :options="option" :request="request" />
    </div>
</template>
