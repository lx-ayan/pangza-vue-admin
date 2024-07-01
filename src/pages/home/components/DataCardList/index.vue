<script setup lang='ts'>

const dataList = [
    {
        title: '用户数量',
        data: 300,
        unit: '万',
        extra: '暂无'
    },
    {
        title: '业绩额',
        data: 20,
        unit: '万',
        extra: '30万'
    },
    {
        title: '约谈数',
        data: 30,
        unit: '次',
        extra: '30次'
    },
    {
        title: '增单量',
        data: 150,
        unit: '套',
        extra: '30套'
    },
    {
        title: '增客量',
        data: 100,
        unit: '人',
        extra: '30人'
    },
    {
        title: '用户数量',
        data: 300,
        unit: '万',
        extra: '暂无'
    },
    {
        title: '业绩额',
        data: 20,
        unit: '万',
        extra: '30万'
    },
    {
        title: '约谈数',
        data: 30,
        unit: '次',
        extra: '30次'
    },
    {
        title: '增单量',
        data: 150,
        unit: '套',
        extra: '30套'
    },
    
]

</script>

<template>
    <t-card title="本月汇总" size="small" :bordered="false">
        <t-statistic class="mr-16":extra="`目标: ${item.extra}`" color="blue" v-for="item, index in dataList" :key="index" :title="item.title" :value="item.data"
            :unit="item.unit">
        </t-statistic>
    </t-card>
</template>

<style lang='scss'></style>