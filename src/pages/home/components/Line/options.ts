import * as  echarts from 'echarts';
import themeStore from '@/store/theme';

export function createOption() {
  const useThemeStore = themeStore();
  return {
    title: {
      left: "50%",
      textAlign: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#ddd",
        },
      },
      backgroundColor: "rgba(255,255,255,1)",
      padding: [5, 10],

      extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)",
    },
    legend: {
      right: 20,
      orient: "vertical",
      data: ["今日"],
    },
    xAxis: {
      type: "category",
      data: [
        "00:00",
        "2:00",
        "4:00",
        "6:00",
        "8:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
      ],
      boundaryGap: false,
      splitLine: {
        show: true,
        interval: "auto",
        lineStyle: {
          color: ["#D4DFF5"],
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#D4DFF5",
        },
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: ["#D4DFF5"],
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#609ee9",
        },
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#D4DFF5'
        },
      },
    },
    series: [
      {
        name: "今日",
        type: "line",
        smooth: true,
        showSymbol: false,
        symbol: "circle",
        symbolSize: 6,
        data: [
          "1200",
          "1400",
          "1008",
          "1411",
          "1026",
          "1288",
          "1300",
          "800",
          "1100",
          "1000",
          "1118",
          "1322",
        ],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: `${useThemeStore.brandColor}`
            },
            {
              offset: 1,
              color: `${useThemeStore.brandColor}06`
            }
          ])
        },
        itemStyle: {
          color: `${useThemeStore.brandColor}`
        },
        lineStyle: {
          color: `${useThemeStore.brandColor}`
        },
      },
    ],
  };
}