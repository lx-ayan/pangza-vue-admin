<script setup lang='ts'>
import { HOME_PROJECT_DATE, HOME_PROJECT_DESCRIPTION, HOME_PROJECT_PROJECTNAME } from '@/common/lang';
import { t } from '@/plugins';
import { computed } from 'vue';

const data = computed(() => ({
    projectName: t(HOME_PROJECT_PROJECTNAME),
    description: t(HOME_PROJECT_DESCRIPTION),
    date: t(HOME_PROJECT_DATE),
}))
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