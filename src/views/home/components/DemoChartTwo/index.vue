<script setup lang='ts'>
import * as echarts from 'echarts';
import DefaultChart from '@/components/public/Charts/index.vue';
import { mixColorByOption } from '@/utils/core/css';
import useThemeStore from '@/store/themeStore';
import { ref, useTemplateRef, watch } from 'vue';

const themeStore = useThemeStore();

let barColor = themeStore.brandColor;

const echartRef = useTemplateRef('echartRef');

const option = ref<echarts.EChartsOption>({
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            show: false
        },
        axisPointer: {
            show: false
        },
        axisLabel: {
            color: '#999999'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: themeStore.isDark ? '#444' : '#EDEDED',
                type: 'dashed'
            }
        },
    },
    tooltip: {

    },
    yAxis: {
        type: 'value',
        max: '250',
        axisLine: {
            show: false,
            lineStyle: {
                color: themeStore.isDark ? '#444' : '#EDEDED', // 刻度线的颜色
                type: 'dashed'
            }
        },
        axisTick: {
            show: true
        },
        axisPointer: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: themeStore.isDark ? '#444' : '#EDEDED'
            }
        },
        axisLabel: {
            color: '#999999'
        }
    },
    series: [
        {
            data: [120, 200, 150, 230, 160, 178, 130, 120, 220, 150, 160, 200],
            type: 'line',
            smooth: true,
            symbolSize: 0,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: mixColorByOption(barColor) },
                { offset: 0.6, color: barColor },
                { offset: 0.7, color: barColor },
                { offset: 1, color: barColor }
            ]),
            itemStyle: {
                borderRadius: [4, 4, 4, 4],
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: barColor + '44'
                    },
                    {
                        offset: 0.7,
                        color: barColor + '00'
                    }
                ])
            },
        }
    ],
    grid: {
        left: '0%',
        bottom: '0%',
        right: '0%',
        top: '12%'
    }
})

watch(() => themeStore.brandColor, (value) => {
    option.value.series[0].color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: mixColorByOption(value) },
        { offset: 0.1, color: value },
        { offset: 0.9, color: value },
        { offset: 0.7, color: value },
        { offset: 1, color: value }
    ]);
    echartRef.value?.reload();
    barColor = value;
})

watch(() => themeStore.isDark, () => {
    option.value.series[0].color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: mixColorByOption(barColor) },
        { offset: 0.1, color: barColor },
        { offset: 0.9, color: barColor },
        { offset: 0.7, color: barColor },
        { offset: 1, color: barColor }
    ]);
    echartRef.value?.reload();
})
</script>
<template>
    <GridItem :colSpan="14">
        <t-card :bordered="false" style="height: 420px;">

            <div class=" text-slate-900 dark:text-white/85 text-lg">
                销售趋势图
            </div>
            <div class="text-slate-400">
                今年增长 <span class="text-[var(--td-error-color)]">+15%</span>
            </div>

            <DefaultChart ref="echartRef" :option="option" height="300px">
            </DefaultChart>

        </t-card>
    </GridItem>
</template>