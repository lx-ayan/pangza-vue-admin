<template>
    <div>
        <Result @main-click="handleMainClick" main-button-text="返回首页" :show-desc-button="false" status="404"
            content="您当前访问的页面不存在" description="请确认您的权限是否足以访问当前页面，或当前资源不存在" />
    </div>
</template>

<script lang="ts" setup>
import Result from '@/components/Result/index.vue';

</script>