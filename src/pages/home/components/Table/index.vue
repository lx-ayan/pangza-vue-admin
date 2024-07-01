<script setup lang='ts'>
import { ThemeEnum } from 'tdesign-vue-next';

const tableData = [
    {
        theme: 'primary',
        text: '通知',
        content: '后台首页展示开发完成，请等待后续开发...'
    },
    {
        theme: 'warning',
        text: '需求',
        content: '请等待 java 结合的版本哦'
    },
    {
        theme: 'primary',
        text: '通知',
        content: '引入 echarts 图表完成'
    },
    {
        theme: 'warning',
        text: '需求',
        content: '请等待与 nestjs 结合的版本哦'
    },
    {
        theme: 'primary',
        text: '通知',
        content: 'Pangza Vue admin 纯前端正在开发中'
    }
];
</script>

<template>
    <t-card title="公告"ize="small" :bordered="false">
        <div v-for="data, index in tableData" :key="index" class="mb-3">
            <t-tag :theme="data.theme as ThemeEnum" variant="light">{{data.text}}</t-tag>
            <span class="ml-3">{{data.content}}</span>
        </div>
    </t-card>
</template>

<style lang='scss'></style>