<script setup lang='ts'>
import AuthComponent from './components/AuthComponent/index.vue';
import DirectiveComponent from './components/DirectiveComponent/index.vue';
import HookComponent from './components/HookComponent/index.vue';
</script>

<template>
    <div>
        <div class="mb-10">
            <AuthComponent />
        </div>
        <div class="mb-10">
            <DirectiveComponent />
        </div>

        <div>
            <HookComponent />
        </div>
    </div>
</template>

<style lang='scss'></style>