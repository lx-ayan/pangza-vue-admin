<script setup lang='ts'>
import useColor from '@/hooks/components/useColor';

const { cardBgColor, borderColor } = useColor();

const optionOne = [
    {
        label: '邮件通知',
        description: 'admin@example.com',
        value: '1'
    },
    {
        label: '短信通知',
        description: '+86 138 0000 0000',
        value: '2'
    },
    {
        label: '应用内通知',
        description: '在系统内显示通知',
        value: '3'
    }
]

const optionTwo = [
    {
        label: '订单通知',
        description: '新订单和订单状态变更',
        value: '1'
    },
    {
        label: '用户活动',
        description: '新用户注册和用户操作',
        value: '2'
    },
    {
        label: '系统公告',
        description: '重要公告和维护通知',
        value: '3'
    },
    {
        label: '营销推广',
        description: '产品更新和促销信息',
        value: '4'
    }
]

</script>
<template>
    <div>
        <div class=" space-y-4">
            <div class="notification rounded border border-color p-5">
                <h3 class=" mb-4">通知渠道</h3>

                <ActionList :options="optionOne">
                    <template #icon-1>
                        <MyIcon name="Mail" class="w-5 h-5 text-gray-400" />
                    </template>
                    <template #icon-2>
                        <MyIcon name="Smartphone" class="w-5 h-5 text-gray-400" />
                    </template>

                    <template #icon-3>
                        <MyIcon name="Bell" class="w-5 h-5 text-gray-400" />
                    </template>

                    <template #action-1>
                        <t-switch size="large"></t-switch>
                    </template>

                    <template #action-2>
                        <t-switch size="large"></t-switch>
                    </template>

                    <template #action-3>
                        <t-switch size="large"></t-switch>
                    </template>

                </ActionList>
            </div>

            <div class="notification rounded border border-color p-5">

                <h3 class=" mb-4">通知类型</h3>
                <ActionList :options="optionTwo">
                    <template #action-1>
                        <t-switch size="large"></t-switch>
                    </template>

                    <template #action-2>
                        <t-switch size="large"></t-switch>
                    </template>

                    <template #action-3>
                        <t-switch size="large"></t-switch>
                    </template>

                    <template #action-4>
                        <t-switch size="large"></t-switch>
                    </template>

                </ActionList>
            </div>

            <div class="notification rounded border border-color p-5">
                <h3 class=" mb-4">通知时段</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="text-sm ">免打扰模式</div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <t-switch size="large"></t-switch>
                        </label>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm text-gray-600 mb-2">开始时间</label>
                            <t-input type="time" defaultValue="22:00" />
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-2">结束时间</label>
                            <t-input type="time" defaultValue="08:00" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.notification {
    background-color: v-bind('cardBgColor');
}

.border-color {
    border-color: v-bind('borderColor');
}
</style>