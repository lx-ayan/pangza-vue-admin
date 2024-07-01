<script setup lang='ts'>
import PersonMatters from '../PersonalMatters/index.vue';
</script>

<template>
    <t-card :bordered="false" title="个人日程" size="small">
        <t-calendar :bordered="false" ref="myCalendar" theme="card" :is-show-weekend-default="true" fill-with-zero />
        <template #actions>
            <t-button variant="text" size="small">查看更多</t-button>
        </template>

        <div class="mt-6">
            <div class="text-base font-bold mb-4">
                个人事项
            </div>
            <div class="mb-3">
                <PersonMatters/>
            </div>
        </div>
    </t-card>
</template>

<style scoped lang='scss'>
.t-calendar {
    padding: 4px !important;
    border: none;
}
</style>