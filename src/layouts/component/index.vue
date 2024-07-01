<script setup lang='ts'>
defineOptions({
    route: {
        meta: {
            auth: true
        }
    }
})
</script>
<template>
    <div>
        <router-view />
    </div>
</template>

<style lang='scss'></style>