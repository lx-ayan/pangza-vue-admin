<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const href = ref('');

onMounted(() => {
    href.value = route.query.href as string;
})
</script>
<template>
    <div class="w-full h-full">
        <iframe class="w-full h-full" :src="href" frameborder="0"></iframe>
    </div>
</template>

<style lang='scss'></style>