<script setup lang='ts'>
import Result from '@/components/Result/index.vue';
import { NotifyPlugin } from 'tdesign-vue-next';
import { useRouter } from 'vue-router';
const router = useRouter();
function handleMainClick() {
    NotifyPlugin.info({
        placement: 'top-right',
        content: '点击了刷新重试!!!',
        title: '系统提示',
        closeBtn: true
    })
}

function handleDescClick() {
    router.push('/home');
}

</script>
<template>
    <div>
        <Result @desc-click="handleDescClick" @main-click="handleMainClick" main-button-text="刷新重试"
            desc-button-text="返回首页" status="500" description="您的操作出现异常，请联系管理员确认是否是服务器发异常" content="操作异常" />
    </div>
</template>

<style lang='scss'></style>