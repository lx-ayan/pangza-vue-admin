<script setup lang='ts'>
import { uniqueId } from 'lodash-es';
import * as echarts from 'echarts';
import { nextTick, ref, watch, markRaw, onUnmounted, computed } from 'vue';
import { MyChartProps } from '@t/components/mychart';

const uuid = `mychart-${uniqueId()}`;

const echartsInstance = ref<NullAble<echarts.ECharts>>(null);

const props = withDefaults(defineProps<MyChartProps>(), {
    width: '600px',
    height: '400px'
});

nextTick(() => {
    init();
})

function init() {
    if (props.options) {
        echartsInstance.value = markRaw(echarts.init(document.getElementById(uuid)));
        echartsInstance.value.setOption(props.options)
    }
}

watch(() => props.options, (value) => {
    if (echartsInstance.value) {
        echartsInstance.value.setOption(value);
    }
}, { deep: true });

watch(() => props.width, () => {
    if (echartsInstance.value) {
        if (echartsInstance.value) {
            echartsInstance.value.resize({
                animation: {
                    duration: 300
                }
            })
        }
    }
})

const style = computed(() => ({ width: props.width, height: props.height }));

onUnmounted(() => {
    if(echartsInstance.value) {
        echartsInstance.value.clear();
        echartsInstance.value.dispose();
    }
})

</script>

<template>
    <div :id="uuid" :style>

    </div>
</template>

<style lang='scss'></style>