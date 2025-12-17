<script setup lang='ts'>
import { computed } from 'vue';
import MyIcon from '../MyIcon/index.vue';
import { mixColorByOption } from '@/utils/core/css';

const props = withDefaults(defineProps<{
    name: string;
    width?: string;
    height?: string;
    circle?: boolean;
    size?: number;
    color?: string;
    strokeWidth?: number;
    defaultClass?: string;
}>(), {
    width: '30px',
    height: '30px',
    circle: true
});

const bgColor = computed(() => {
    return mixColorByOption(props.color, { count: 3 });
})

defineOptions({
    name: 'ColorIcon',
    globalComponent: true
})


</script>
<template>
    <div class="color-icon" :class="{ 'rounded-full': props.circle }">
        <my-icon :name="props.name" :size="props.size" :color="props.color" :default-class="props.defaultClass"
            :stroke-width="props.strokeWidth"></my-icon>
    </div>
</template>

<style>
.color-icon {
    width: v-bind('props.width');
    height: v-bind('props.height');
    background-color: v-bind('bgColor');
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>