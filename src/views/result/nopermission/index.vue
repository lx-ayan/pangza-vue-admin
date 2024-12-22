<script setup lang='ts'>
import Result from '@/components/Result/index.vue';
</script>
<template>
    <div>
        <Result  :showButton="false" :showDescButton="false" status="-1" description="请联系管理员，权限设置好后即可访问。" content="暂无权限访问"/>
    </div>
</template>

<style lang='scss'></style>