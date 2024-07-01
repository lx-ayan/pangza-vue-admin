<script setup lang='ts'>
import MattersItem from './MattersItem/index.vue';

const dataList = [
    {
        title: '硬件采购申请审批',
        description: '公司电脑硬件采购单',
        createtime: '2024-06-25',
        dot: true
    },
    {
        title: '报销申请审批',
        description: '审批上月报销单',
        createtime: '2024-06-25',
        dot: true
    },
    {
        title: '考勤记录导出核实',
        description: '考勤记录导出核实',
        createtime: '2024-06-25'
    }
];
</script>

<template>
    <div v-for="item, index in dataList" :key="index" class="mb-3">
        <MattersItem :data="item" />
    </div>
</template>

<style lang='scss'></style>