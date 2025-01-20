<script setup lang='ts'>
import { computed } from 'vue';

const data = computed(() => ({
    projectName: '采购合同审批',
    description: '业务审批',
    date: '2024-12-18 11:16截止',
})); 
</script>

<template>
    <div>
        <t-badge style="width: 100%;" v-for="(item) in 3" :key="item" dot :count="100">
            <div class="mb-4 border p-3 rounded">
                <div class="mb-1 text-base font-bold">
                    {{ data.projectName }}
                </div>
                <div class="text-gray-500">
                    {{ data.description }} <t-divider layout="vertical" /> {{ data.date }}
                </div>
            </div>
        </t-badge>
    </div>
</template>

<style lang='scss'></style>