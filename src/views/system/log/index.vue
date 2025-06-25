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
    },
    {
        key: 'level',
        title: '级别',
        width: 100
    },
    {
        key: 'message',
        title: '消息',
        hideInSearch: true
    }
])

async function request() {
    return {
        success: true,
        list: [
            {
                id: 1,
                type: 'info',
                level: 'info',
                message: '这是一条信息'
            },
            {
                id: 2,
                type: 'warning',
                level: 'warning',
                message: '这是一条警告'
            },
            {
                id: 3,
                type: 'error',
                level: 'error',
                message: '这是一条错误'
            },
            {
                id: 4,
                type: 'debug',
                level: 'debug',
                message: '这是一条调试'
            }
        ],
        total: 30
    }
}
</script>

<template>
    <div>
        <ProTable :options="option" :request="request" />
    </div>
</template>
