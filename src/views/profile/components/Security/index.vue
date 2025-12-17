<script setup lang='ts'>
import type { ProFormOption } from '@/components/ProComponents/ProForm/index.vue';
import type { ProFormInputProps } from '@/components/ProComponents/ProFormInput/index.vue';
import useColor from '@/hooks/components/useColor';
import { ref } from 'vue';

const { cardBgColor, borderColor } = useColor();

const visible = ref(false);

const options: ProFormOption[] = [
    {
        name: 'oldPassword',
        label: '当前密码',
        props: {
            placeholder: '请输入当前密码'
        } as ProFormInputProps
    },
    {
        name: 'newPassword',
        label: '新密码',
        props: {
            placeholder: '请输入当新密码',
            formProps: {
                tips: '密码长度至少8位，包含字母、数字和特殊字符'
            }
        } as ProFormInputProps
    },
    {
        name: 'reNewParssword',
        label: '确认新密码',
        props: {
            placeholder: '请输入确认新密码'
        } as ProFormInputProps
    }
]

const optionOne = [
    {
        label: '成功登录',
        description: 'Windows · Chrome · 北京市',
        value: '1'
    },
    {
        label: '成功登录',
        description: 'iPhone · Safari · 上海市',
        value: '2'
    },
    {
        label: '成功登录',
        description: 'Windows · Chrome · 北京市',
        value: '3'
    }
]
</script>
<template>
    <div class="space-y-4">
        <ModalForm :options header="修改密码" v-model:visible="visible" />
        <div class="security rounded border border-color p-5">
            <h3 class="mb-4">登录安全</h3>
            <div class="space-y-3">
                <GrayCard>
                    <div class="flex items-center justify-between rounded">
                        <div>
                            <div class="text-sm">修改密码</div>
                            <div class="text-xs text-gray-500 mt-0.5">上次修改：2025年10月15日</div>
                        </div>
                        <t-button @click="visible = true" class="mt-3" theme="primary" variant="outline">修改</t-button>
                    </div>
                </GrayCard>

                <GrayCard>
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="text-sm">两步验证</div>
                            <div class="text-xs mt-0.5">
                                <span class="inline-flex items-center gap-1">
                                    <span class="w-2 h-2 bg-[#00a870] rounded-full"></span>
                                    已启用
                                </span>
                            </div>
                        </div>
                        <t-button class="mt-3" theme="base" variant="outline">修改</t-button>

                    </div>
                </GrayCard>

                <GrayCard>
                    <div class="flex items-center justify-between rounded">
                        <div>
                            <div class="text-sm ">生物识别</div>
                            <div class="text-xs text-gray-500 mt-0.5">使用指纹或面部识别登录</div>
                        </div>
                        <t-button class="mt-3" theme="primary" variant="outline">修改</t-button>
                    </div>
                </GrayCard>
            </div>
        </div>

        <div class="security rounded border border-color p-5">
            <h3 class=" mb-4">登录设备</h3>
            <div class="space-y-3">
                <GrayCard class="flex items-start gap-3 p-3 bg-blue-50/50 border border-blue-200/60">
                    <MyIcon name="Laptop" class="w-5 h-5 text-[var(--td-brand-color)] mt-0.5" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-1">
                            <div class="text-sm ">Windows · Chrome</div>
                            <span class="text-xs bg-[var(--td-brand-color)] text-white px-2 py-0.5 rounded">当前设备</span>
                        </div>
                        <div class="text-xs text-gray-500">北京市 · 2025-11-04 14:32</div>
                    </div>
                </GrayCard>

                <GrayCard class="flex items-start gap-3 p-3 bg-gray-50/50 rounded">
                    <MyIcon name="Smartphone" class="w-5 h-5 text-gray-400 mt-0.5" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-1">
                            <div class="text-sm">iPhone · Safari</div>
                            <t-link hover="color" theme="danger">移除</t-link>
                        </div>
                        <div class="text-xs text-gray-500">上海市 · 2025-11-03 09:15</div>
                    </div>

                </GrayCard>

                <GrayCard class="flex items-start gap-3 p-3 bg-gray-50/50 rounded">
                    <MyIcon name="Monitor" class="w-5 h-5 text-gray-400 mt-0.5" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-1">
                            <div class="text-sm">MacBook · Safari</div>
                            <t-link hover="color" theme="danger">移除</t-link>
                        </div>
                        <div class="text-xs text-gray-500">深圳市 · 2025-11-01 16:48</div>
                    </div>
                </GrayCard>
            </div>
            <t-button block class="mt-3" theme="danger" variant="outline">登出所有其他设备</t-button>
        </div>

        <div class="security rounded border border-color p-5">
            <h3 class="mb-4">登录历史</h3>
            <ActionList :options="optionOne">
                <template #action-1>
                    <span class="text-gray-500">2025-11-04 14:32</span>
                </template>

                <template #action-2>
                    <span class="text-gray-500">2025-11-03 09:15</span>
                </template>

                <template #action-3>
                    <span class="text-gray-500">2025-10-15 11:20</span>
                </template>

            </ActionList>

            <t-button class="mt-3" block theme="primary" variant="outline">查看完整历史</t-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.security {
    background-color: v-bind('cardBgColor');
}

.border-color {
    border-color: v-bind('borderColor');
}
</style>