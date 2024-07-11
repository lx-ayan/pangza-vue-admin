<script setup lang='ts'>
import CanvasEditor from '@/components/CanvasEditor/index.vue';
import { ref } from 'vue';
const val = ref('Hello World');
</script>

<template>
    <div>
        {{ val }}
        <CanvasEditor v-model:header-value="val" align="center" v-model="val" />
    </div>
</template>

<style lang='scss'></style>