<template>
    <div>
        <div class=" bg-red-500">
            关于
        </div>
        <router-link to="/about/user">用户</router-link>
        <router-link to="/about/product">产品</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    route: {
        redirect: '/about/user',
        meta: {
            auth: true
        }
    }
})
</script>