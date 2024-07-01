<script setup lang='ts'>
import PersonalSchedule from './components/PersonalSchedule/index.vue';
import DataCardList from './components/DataCardList/index.vue';
import UserCard from './components/UserCard/index.vue';
import Line from './components/Line/index.vue';
import Table from './components/Table/index.vue';

defineOptions({
    route: {
        path: '/home',
    }
})
</script>

<template>
    <div>
        <UserCard />
        <t-alert theme="info" message="欢迎来到，Pangza Vue Admin 中后台管理系统" />
        <div class="flex justify-between mt-5">
            <PersonalSchedule />
            <div class="ml-4 flex-1">
                <DataCardList />
                <div class="mt-6 flex">
                    <div>
                        <Line />
                    </div>

                    <div class="ml-6 flex-1">
                        <Table />
                        <t-card title="赞助" :bordered="false" class="mt-2" size="small">
                            如果各位大大觉得本项目还不错，您可以通过在 Pangza 个人博客上的二维码为 Pangza 点一杯奶茶。 Java 与纯前端，Nestjs
                            与纯前端的结合版本会在后续推出。您的支持就是我的动力。
                        </t-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'></style>