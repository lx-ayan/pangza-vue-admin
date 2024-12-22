<script setup lang='tsx'>
const content = () => <div>我是弹出层</div>
</script>

<template>
    <div style="display: flex; justify-content: space-around; height: 40px;">
        <ProButton :content action="popup">
            弹出层按钮
        </ProButton>

        <ProButton>
            <template #icon>
                <t-icon name="delete"></t-icon>
            </template>
            <template #content>
                我是弹窗
            </template>
            <template #title>
                系统提示
            </template>
            弹窗按钮
        </ProButton>

        <ProButton theme="link" :content action="popup">
            弹出层连接
        </ProButton>

        <ProButton theme="link">
            <template #icon>
                <t-icon name="delete"></t-icon>
            </template>
            <template #content>
                我是弹窗
            </template>
            <template #title>
                系统提示
            </template>
            弹窗连接
        </ProButton>
    </div>
</template>

<style lang='scss'></style>