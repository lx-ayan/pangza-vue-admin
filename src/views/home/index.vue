<script setup lang='tsx'>
import { computed } from 'vue';
import DataCard from './components/DataCard/index.vue';
import Project from './components/Project/index.vue';
import Client from './components/Client/index.vue';
import News from './components/News/index.vue';
import { t } from '@/plugins';
import { HOME_MORE, HOME_PROJECT_ACTIONS, HOME_PROJECT_CLIENTTITLE, HOME_PROJECT_NEWS, HOME_PROJECT_TITLE } from '@/common/lang';
defineOptions({
    route: {
        name: 'asdasd'
    }
});

const data = computed(() => ({
    projectTitle: t(HOME_PROJECT_TITLE),
    clientTitle: t(HOME_PROJECT_CLIENTTITLE),
    newsTitle: t(HOME_PROJECT_NEWS),
    actionsTitle: t(HOME_PROJECT_ACTIONS),
    more: t(HOME_MORE)
}))

</script>

<template>
    <div>
        <DataCard />
        <div class="w-full grid grid-cols-4 gap-4 mt-4">
            <div>
                <t-card :title="data.clientTitle">
                    <Client />
                </t-card>
                <div class="mt-3">
                    <t-card :title="data.projectTitle">
                        <Project />
                    </t-card>
                </div>
            </div>

            <div class=" col-span-3">
                <div class="mb-3">
                    <t-card :title="data.newsTitle">
                        <template #actions>
                            <t-button variant="text">
                                {{ data.more }}
                                <template #suffix>
                                    <t-icon name="chevron-right"></t-icon>
                                </template>
                            </t-button>
                        </template>
                        <News />
                    </t-card>
                </div>
                <t-card :title="data.actionsTitle">
                    <t-progress :percentage="22.76" />
                </t-card>
            </div>
        </div>
    </div>
</template>

<style lang='scss'></style>