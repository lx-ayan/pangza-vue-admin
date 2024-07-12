<script setup lang='ts'>
import CanvasEditor from '@/components/CanvasEditor/index.vue';
import { ref } from 'vue';
const val = ref('Hello World');
</script>

<template>
    <div>
        <CanvasEditor :tool-bar-config="['font-family', 'text-align']"  v-model="val" />
    </div>
</template>

<style lang='scss'></style>