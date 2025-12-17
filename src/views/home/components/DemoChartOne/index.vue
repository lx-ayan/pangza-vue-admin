<script setup lang='ts'>
import * as echarts from 'echarts';
import DefaultChart from '@/components/public/Charts/index.vue';
import { mixColorByOption } from '@/utils/core/css';
import useThemeStore from '@/store/themeStore';
import { ref, useTemplateRef, watch } from 'vue';

const themeStore = useThemeStore();

let barColor = themeStore.brandColor;

const echartRef = useTemplateRef('echartRef');

const option = ref({
    xAxis: {
        type: 'category',
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
            data: [120, 200, 150, 80, 70, 110, 130, 120, 220, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: '60%',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: mixColorByOption(barColor) },
                { offset: 0.9, color: barColor },
                { offset: 0.7, color: barColor },
                { offset: 1, color: barColor }
            ]),
            itemStyle: {
                borderRadius: [4, 4, 4, 4]
            }
        }
    ],
    grid: {
        left: '0%',
        bottom: '0%',
        right: '0%',
        top: '12%'
    }
});

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
    <GridItem :colSpan="10">
        <t-card :bordered="false" style="height: 420px;">

            <DefaultChart ref="echartRef" :option="option" height="230px">
            </DefaultChart>

            <div class="text-lg text-slate-900 dark:text-white mt-4">
                房产销售
            </div>
            <div class="text-slate-900 dark:text-white mt-1">
                同比增长 <span class="text-[var(--td-error-color)]">+23%</span>
            </div>
            <div class="text-gray-500">
                工作再多也要休息休息，Pangza Vue Admin 祝您早日成为销售大师。
            </div>

            <Grid class="mt-4 mb-5">
                <GridItem :colSpan="6">
                    <div class="text-2xl">
                        200
                    </div>
                    <div class="text-slate-500">
                        商机数
                    </div>
                </GridItem>
                <GridItem :colSpan="6">
                    <div class="text-2xl">
                        120
                    </div>
                    <div class="text-slate-500">
                        房源数
                    </div>
                </GridItem>
                <GridItem :colSpan="6">
                    <div class="text-2xl">
                        56
                    </div>
                    <div class="text-slate-500">
                        维护客户
                    </div>
                </GridItem>
                <GridItem :colSpan="6">
                    <div class="text-2xl">
                        20
                    </div>
                    <div class="text-slate-500">
                        带看数
                    </div>
                </GridItem>
            </Grid>
        </t-card>
    </GridItem>
</template>