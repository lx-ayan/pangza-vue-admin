<script setup lang='ts'>
import * as echarts from 'echarts';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

let echartInstance: Nullable<echarts.ECharts> = null;

let observer: Nullable<ResizeObserver> = null;

const echartsContainer = ref<HTMLDivElement>();

const props = withDefaults(defineProps<{
    height?: string;
    width?: string;
    option?: any;
}>(), {
    height: '100%',
    width: '100%',
    option: () => ({})
});

const initChart = () => {
    nextTick(() => {
        echartInstance = echarts.init(echartsContainer.value);
        echartInstance.setOption(props.option);
        observer = new ResizeObserver(() => {
            echartInstance.resize();
        });
        observer.observe(echartsContainer.value);
    })
};

function destroy() {
    if (observer) {
        observer.disconnect();
        observer = null;
        echartInstance?.dispose()
    }
}

watch(props.option, (value) => {
    echartInstance.setOption(value);
}, { deep: true });

onMounted(() => initChart());

onUnmounted(() => destroy());

defineExpose({
    reload: () => {
        echartInstance.clear();
        echartInstance.setOption(props.option, true);
    }
})

window.onresize = () => {
    if (echartInstance) {
        echartInstance.resize();
    }
}

</script>

<template>
    <div ref="echartsContainer" :style="{ height: props.height, width: props.width }">

    </div>
</template>