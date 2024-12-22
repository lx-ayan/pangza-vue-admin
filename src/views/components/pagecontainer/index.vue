<script setup lang='tsx'>
import { PageContainer, PageContainerHeaderProps, PageContainerProps } from 'tdesign-pro-component';
import { ref } from 'vue';
const header: PageContainerHeaderProps = {
    title: '页面标题',
    actions: () => (<t-button>操作</t-button>),
    breadcrumb: {
        items: [
            { title: '主页面', path: '/' },
            { title: '一级页面', path: '/first' },
            { title: '二级页面', path: '/twice' }
        ]
    }
}

const tabList: PageContainerProps['tabList'] = [
    {
        label: '示例',
        value: '1'
    },
    {
        label: 'API',
        value: '2'
    }
]

const tabActiveKey = ref('1');

function handleTabChange(value: string) {
    tabActiveKey.value = value;
}
</script>

<template>
    <div>
        <PageContainer :tabList :tabActiveKey @tab-change="handleTabChange" :header>
            <template #description>
                <t-descriptions>
                    <t-descriptions-item label="Name">TDesign</t-descriptions-item>
                    <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
                    <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
                    <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
                </t-descriptions>
            </template>

            <t-space direction="vertical">
                <t-alert theme="success" message="这是一条成功的消息提示" />
                <t-alert theme="warning">
                    <template #message>这是一条警示信息</template>
                </t-alert>
                <t-alert theme="error">高危操作/出错信息提示</t-alert>
            </t-space>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>