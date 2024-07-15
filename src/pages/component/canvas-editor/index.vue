<script setup lang='ts'>
import { ref } from 'vue';
const val = ref('Hello World');
</script>

<template>
    <div>
        <CanvasEditor v-model="val" />
    </div>
</template>

<style lang='scss'></style>