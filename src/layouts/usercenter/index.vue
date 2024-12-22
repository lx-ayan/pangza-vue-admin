<script setup lang="tsx">
import { getCurrentUser } from '@/utils/security';
import News from '@/views/home/components/News/index.vue';
import { PageContainerProps } from 'tdesign-pro-component';
const user = getCurrentUser();

const header = {
    title: `你好呀,${user.username}`,
    actions: () => <div>
        <t-button>
            {{
                icon: () => <t-icon name='edit'></t-icon>,
                default: () => '修改资料'
            }}
        </t-button>
    </div>
}

const tabList: PageContainerProps['tabList'] = [
    {
        label: '我的项目',
        value: '1'
    }
]
</script>

<template>
    <div>
        <t-card size="small">
            <PageContainer tabActiveKey="1" :tabList :header>
                <template #description>
                    <div class="mt-6">
                        <t-descriptions itemLayout="vertical" :column="4" title="个人信息">
                            <t-descriptions-item label="姓名">张三</t-descriptions-item>
                            <t-descriptions-item label="工号">T20000106</t-descriptions-item>
                            <t-descriptions-item label="邮箱">111111111@qq.com</t-descriptions-item>
                            <t-descriptions-item label="座位号">T32F 012</t-descriptions-item>
                            <t-descriptions-item label="主体">腾讯集团</t-descriptions-item>
                            <t-descriptions-item label="上级">胖砸</t-descriptions-item>
                            <t-descriptions-item label="职位">高级前端工程师</t-descriptions-item>
                            <t-descriptions-item label="入职时间">2024-12-22</t-descriptions-item>
                        </t-descriptions>
                    </div>
                </template>

                <News />
            </PageContainer>
        </t-card>
    </div>
</template>