<script setup lang='ts'>
import { nextTick, ref, markRaw } from 'vue';
import * as echarts from 'echarts';
import { createOption } from './options';

const chartRef = ref<HTMLDivElement | undefined>();
const chartInstance = ref<echarts.ECharts | undefined>();

nextTick(() => {
    chartInstance.value = markRaw(echarts.init(chartRef.value));
    chartInstance.value.setOption(createOption());
})

</script>

<template>
    <t-card :bordered="false" title="今日在线人数">
        <div style="width: 840px; height: 320px;" ref="chartRef">

        </div>
        <template #actions>
            <t-radio-group variant="default-filled" default-value="1">
                <t-radio-button value="1">今日</t-radio-button>
                <t-radio-button value="2">近七日</t-radio-button>
            </t-radio-group>
        </template>
    </t-card>
</template>

<style lang='scss'></style>