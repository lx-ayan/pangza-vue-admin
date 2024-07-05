<script setup lang='ts'>
import Screen from '@/components/Screen/index.vue';
import { getBgColorClass } from '@/utils/color';

const breads = [
    {
        text: '首页',
        path: '/home'
    },
    {
        text: '页面容器布局',
        value: '/component/page'
    }
]

const options = [
    {
        key: 'username',
        label: '用户名'
    },
    {
        key: 'age',
        label: '年龄'
    },
    {
        key: 'address',
        label: '居住地址'
    },
    {
        key: 'sex',
        label: '性别'
    },
    {
        key: 'political',
        label: '政治面貌'
    },
    {
        key: 'marriage',
        label: '婚姻情况'
    },
    {
        key: 'description',
        label: '个人描述'
    }
]

const tabs = [
    {
        label: '栏目A',
        key: 'A',
        children: '栏目A 内容'
    },
    {
        label: '栏目B',
        key: 'B',
        children: '栏目B 内容'
    }
]

async function request() {
    return Promise.resolve({
        username: '刘军',
        marriage: '未婚',
        political: '党员',
        sex: '男',
        address: '安徽省淮北市相山区恒大雅苑三栋二单元2406',
        age: '25',
        description: '个人爱打游戏，吃坚果，骑车，旅游。'
    });
}

</script>

<template>
    <div id="page-container" :class="getBgColorClass()" class="h-full p-4">
        <PageContainer tabDefaultValue="A" :tabs :breads title="页面容器布局">
            <template #actions>
                <t-button>操作一</t-button>
                <t-button variant="outline" style="margin-left: 12px;">操作二</t-button>
                <Screen variant="outline" style="margin-left: 12px;" el="page-container">
                    <template #default="{ state }">
                        {{ state ? '缩小' : '全屏' }}
                    </template>
                </Screen>
            </template>
            <template #content>
                <div>
                    <ProDescription :column="6" title=" " :options="options" :request="request" />
                </div>
            </template>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>