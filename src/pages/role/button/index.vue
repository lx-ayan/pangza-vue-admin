<script setup lang='ts'>
</script>

<template>
    <div>
        按钮权限

        <Auth needShow permission="role_ADMIN1">
            <template #default="{hasAuth}">
                <t-button :disabled="hasAuth == false">admin</t-button>
            </template>
        </Auth>
    </div>
</template>

<style lang='scss'></style>