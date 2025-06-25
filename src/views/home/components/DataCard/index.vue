<script setup lang='ts'>
import MyChart from '@/components/MyChart/index.vue';
import { computed } from 'vue';
import * as echarts from 'echarts';

const cardI18n = computed(() => ({
    days: ['近三天', '近七天', '近一月'],
    one: '数据一',
    oneDesc: '数据一，新增20%',
    two:  '数据二',
    three:  '数据三',
    four:'数据四',
}));

const option1 = {
    grid: {
        left: '0',   //距左边边框的距离
        right: '0',  //距右边边框的距离
        bottom: '0',//距下面边框的距离
        top: '0',    //距上面边框的距离
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            lineStyle: {
                color: '#0052d9'
            },
            areaStyle: {
                color: '#0052d9',
                opacity:0.1
            }
        }
    ]
};

const options2 = {
    grid: {
        left: "0",
        right: "0%",
        bottom: "0",
        top: '0%',
    },
    xAxis: {
        show: false,
        boundaryGap: false, //坐标轴两边留白
        data: [
            "12201",
            "12202",
            "12203",
            "12204",
            "12301",
            "12302",
            "12303",
            "12304",
            "12401",
            "12402",
            "12403",
            "12404",
        ],
        axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
                color: "#1B253A",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12,
            },
            formatter: function (params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 4; //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }
                } else {
                    newParamsName = params;
                }
                return newParamsName;
            },
            //rotate:50,
        },
        axisTick: {
            //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
                color: "#E5E9ED",
                // opacity:0.2
            },
        },
        splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false,
            lineStyle: {
                color: "#E5E9ED",
                // 	opacity:0.1
            },
        },
    },
    yAxis: [
        {
            type: "value",
            show: false,
            axisLabel: {
                textStyle: {
                    color: "#a8aab0",
                    fontStyle: "normal",
                    fontFamily: "微软雅黑",
                    fontSize: 12,
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: "#E5E9ED",
                    // 	opacity:0.1
                },
            },
        },
    ],
    series: [
        {
            name: "2018",
            type: "line",
            itemStyle: {
                normal: {
                    color: "#3A84FF",
                    lineStyle: {
                        color: "#3A84FF",
                        width: 1,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: "rgba(58,132,255,0)",
                            },
                            {
                                offset: 1,
                                color: "rgba(58,132,255,0.35)",
                            },
                        ]),
                    },
                },
            },
            data: [1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4],
        },
        {
            name: "2019",
            type: "line",
            itemStyle: {
                normal: {
                    color: "rgba(255,80,124,1)",
                    lineStyle: {
                        color: "rgba(255,80,124,1)",
                        width: 1,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: "rgba(255,80,124,0)",
                            },
                            {
                                offset: 1,
                                color: "rgba(255,80,124,0.35)",
                            },
                        ]),
                    },
                },
            },
            data: [9, 5, 7, 8, 6, 7, 8, 7, 7, 6, 8, 6],
        },
    ],
}

const option3 = {
    grid: {
        left: '0',   //距左边边框的距离
        right: '0',  //距右边边框的距离
        bottom: '0',//距下面边框的距离
        top: '0',    //距上面边框的距离
    },
    xAxis: {
        type: 'category',
        show: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon1', 'Tue2', 'Wed3', 'Thu4', 'Fri5', 'Sat6', 'Sun7', 'Thu8', 'Fri9', 'Sat10', 'Sun11']
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 200, 150, 80, 70],
            type: 'bar',
            itemStyle: {
                color: '#0052d9'
            }
        }
    ]
};

</script>

<template>
    <div class="w-full grid grid-cols-4 gap-4">
        <t-card>
            <t-statistic style="width: 100%;" title="SALE" :value="82.76" unit="%">
                <template #title>
                    <div class="flex justify-between items-center">
                        <div>
                            {{ cardI18n.one }}
                        </div>
                        <div>
                            <t-dropdown size="small"
                                :options="cardI18n.days.map(item => ({ content: item, value: item }))">
                                <t-button variant="text" size="small">{{ cardI18n.days[0] }}
                                    <template #suffix>
                                        <t-icon name="chevron-down"></t-icon>
                                    </template>
                                </t-button>
                            </t-dropdown>
                        </div>
                    </div>
                </template>
                <template #extra>
                    <div class="flex justify-between mb-2 mt-3">
                        <div>
                            {{ cardI18n.oneDesc }}
                        </div>
                        <div class="flex items-center text-[--td-success-color]">
                            <span class="mr-1">7% </span><t-icon size="22" name="trending-up"></t-icon>
                        </div>
                    </div>
                    <t-progress :percentage="82.76" :label="false" />
                </template>
            </t-statistic>
        </t-card>

        <t-card>
            <t-statistic trend-placement="right" style="width: 100%;" title="SALE" :value="82.76" unit="%">
                <template #suffix>
                    <div class="flex items-center text-[--td-success-color]">
                        <span class="mr-1">7% </span><t-icon size="22" name="trending-up"></t-icon>
                    </div>
                </template>
                <template #title>
                    <div class="flex justify-between items-center">
                        <div>
                            {{ cardI18n.one }}
                        </div>
                        <div>
                            <t-dropdown size="small"
                                :options="cardI18n.days.map(item => ({ content: item, value: item }))">
                                <t-button variant="text" size="small">{{ cardI18n.days[0] }}
                                    <template #suffix>
                                        <t-icon name="chevron-down"></t-icon>
                                    </template>
                                </t-button>
                            </t-dropdown>
                        </div>
                    </div>
                </template>
                <template #extra>
                    <div class="w-full">
                        <MyChart height="40px" width="100%" :options="option1" />
                    </div>
                </template>
            </t-statistic>
        </t-card>

        <t-card>
            <t-statistic trend-placement="right" style="width: 100%;" title="SALE" :value="82.76" unit="%">
                <template #suffix>
                    <div class="flex items-center text-[--td-warning-color]">
                        <span class="mr-1">0% </span><t-icon size="22" name="minus"></t-icon>
                    </div>
                </template>
                <template #title>
                    <div class="flex justify-between items-center">
                        <div>
                            {{ cardI18n.one }}
                        </div>
                        <div>
                            <t-dropdown size="small"
                                :options="cardI18n.days.map(item => ({ content: item, value: item }))">
                                <t-button variant="text" size="small">{{ cardI18n.days[0] }}
                                    <template #suffix>
                                        <t-icon name="chevron-down"></t-icon>
                                    </template>
                                </t-button>
                            </t-dropdown>
                        </div>
                    </div>
                </template>
                <template #extra>
                    <div class="w-full">
                        <MyChart height="40px" width="100%" :options="options2" />
                    </div>
                </template>
            </t-statistic>
        </t-card>

        <t-card>
            <t-statistic trend-placement="right" style="width: 100%;" title="SALE" :value="82.76" unit="%">
                <template #suffix>
                    <div class="flex items-center text-[--td-success-color]">
                        <span class="mr-1">7% </span><t-icon size="22" name="trending-up"></t-icon>
                    </div>
                </template> 
                <template #title>
                    <div class="flex justify-between items-center">
                        <div>
                            {{ cardI18n.one }}
                        </div>
                        <div>
                            <t-dropdown size="small"
                                :options="cardI18n.days.map(item => ({ content: item, value: item }))">
                                <t-button variant="text" size="small">{{ cardI18n.days[0] }}
                                    <template #suffix>
                                        <t-icon name="chevron-down"></t-icon>
                                    </template>
                                </t-button>
                            </t-dropdown>
                        </div>
                    </div>
                </template>
                <template #extra>
                    <div class="w-full">
                        <MyChart height="40px" width="100%" :options="option3" />
                    </div>
                </template>
            </t-statistic>
        </t-card>
    </div>
</template>

<style lang='scss'></style>