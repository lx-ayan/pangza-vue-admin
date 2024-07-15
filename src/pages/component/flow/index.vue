<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { ref } from 'vue';

const initialNodes = ref([
    {
        id: '1',
        position: { x: 50, y: 50 },
        data: { label: 'Node 1', },
    },
    {
        id: '2',
        position: { x: 50, y: 250 },
        data: { label: 'Node 2', },
    }
])

const { addEdges, onConnect } = useVueFlow()
onConnect(addEdges)
</script>

<template>
    <VueFlow :nodes="initialNodes" :edges="edges" />
</template>
<style>
@import '@vue-flow/core/dist/style.css';

@import '@vue-flow/core/dist/theme-default.css';
</style>