<script setup lang='ts'>
import Result from '@/components/Result/index.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
function handleMainClick() {
    router.push('/home');
}

</script>
<template>
    <div>
        <Result @main-click="handleMainClick" main-button-text="返回首页" :show-desc-button="false" status="404"
            content="您当前访问的页面不存在" description="请确认您的权限是否足以访问当前页面，或当前资源不存在" />
    </div>
</template>

<style lang='scss'></style>