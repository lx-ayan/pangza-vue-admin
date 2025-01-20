<script setup lang='tsx'>
import DataCard from './components/DataCard/index.vue';
import Project from './components/Project/index.vue';
import Client from './components/Client/index.vue';
import News from './components/News/index.vue';
defineOptions({
    route: {
        name: 'asdasd'
    }
});

</script>

<template>
    <div>
        <DataCard />
        <div class="w-full grid grid-cols-4 gap-4 mt-4">
            <div>
                <t-card title="客户匹配度">
                    <Client />
                </t-card>
                <div class="mt-3">
                    <t-card title="我的项目">
                        <Project />
                    </t-card>
                </div>
            </div>

            <div class=" col-span-3">
                <div class="mb-3">
                    <t-card title="新闻资讯">
                        <template #actions>
                            <t-button variant="text">
                                更多详情
                                <template #suffix>
                                    <t-icon name="chevron-right"></t-icon>
                                </template>
                            </t-button>
                        </template>
                        <News />
                    </t-card>
                </div>
                <t-card title="操作">
                    <t-progress :percentage="22.76" />
                </t-card>
            </div>
        </div>
    </div>
</template>

<style lang='scss'></style>