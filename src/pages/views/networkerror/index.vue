<script setup lang='ts'>
import Result from '@/components/Result/index.vue';
</script>
<template>
    <div>
        <Result :show-button="false" main-button-text="返回首页" :show-desc-button="false" status="-1"
            content="网络异常" description="您当前网络环境已断开，请检查是否接入网络" />
    </div>
</template>

<style lang='scss'></style>