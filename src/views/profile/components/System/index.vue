<script setup lang='ts'>
import useColor from '@/hooks/components/useColor';

const { cardBgColor, borderColor } = useColor();

const optionOne = [
    {
        label: '系统版本',
        value: '1'
    },
    {
        label: '最后更新',
        value: '2'
    },
    {
        label: '数据库版本',
        value: '3'
    }
]

const optionTwo = [
    {
        label: '自动备份',
        description: '每天凌晨3点自动备份数据',
        value: '1'
    },
    {
        label: '错误报告',
        description: '自动发送错误日志以改进系统',
        value: '2'
    },
    {
        label: '性能监控',
        description: '实时监控系统性能指标',
        value: '3'
    }
]
</script>
<template>
    <div class="space-y-4">
        <div class="system rounded border border-color p-5">
            <h3 class=" mb-4">系统信息</h3>
            <div class="space-y-3">
                <ActionList titleColor="dark:text-white/60" :options="optionOne">
                    <template #action-1>
                        <span>v1.0.0</span>
                    </template>

                    <template #action-2>
                        <span>2025-12-16</span>
                    </template>

                    <template #action-3>
                        <span>PostgreSQL 15.2</span>
                    </template>
                </ActionList>
            </div>
        </div>

        <div class="system rounded border border-color p-5">
            <h3 class=" mb-4">系统配置</h3>
            <ActionList titleColor="dark:text-white/60" :options="optionTwo">
                <template #action-1>
                    <span>v1.0.0</span>
                </template>

                <template #action-2>
                    <span>2025-12-16</span>
                </template>

                <template #action-3>
                    <span>PostgreSQL 15.2</span>
                </template>
            </ActionList>
        </div>

        <div class="system rounded border border-color p-5">
            <h3 class=" mb-4">存储管理</h3>
            <div class="space-y-3">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm dark:text-white/60">已使用存储空间</span>
                    <span class="text-sm ">12.5 GB / 100 GB</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full bg-[var(--td-brand-color)] rounded-full" :style="{ width: '12.5%' }"></div>
                </div>
                <div class="grid grid-cols-2 gap-2 pt-2">
                    <div class="text-xs dark:text-white/60">数据库：6.2 GB</div>
                    <div class="text-xs dark:text-white/60">文件：4.8 GB</div>
                    <div class="text-xs dark:text-white/60">日志：1.2 GB</div>
                    <div class="text-xs dark:text-white/60">缓存：0.3 GB</div>
                </div>
            </div>
            <t-button block variant="outline" theme="primary" class="mt-4">
                清理存储空间
            </t-button>
        </div>

        <div class="system rounded border border-color p-5">
            <h3 class=" mb-4">系统维护</h3>
            <div class="space-y-3">
                <GrayCard class="w-full flex items-center justify-between p-3 text-sm">
                    <span>检查更新</span>
                    <span class="text-xs text-gray-500">当前为最新版本</span>
                </GrayCard>
                <GrayCard class="w-full flex items-center justify-between p-3 text-sm">
                    <span>重建索引</span>
                    <span class="text-xs text-gray-500">优化数据库性能</span>
                </GrayCard>
                <GrayCard class="w-full flex items-center justify-between p-3 text-sm">
                    <span>导出日志</span>
                    <span class="text-xs text-gray-500">下载系统运行日志</span>
                </GrayCard>
                <button
                    class="w-full flex items-center justify-between p-3 py-2 text-sm text-[#e34d59] border border-[#e34d59] bg-red-50/50 rounded hover:bg-red-50 transition-colors">
                    <span>重启系统</span>
                    <span class="text-xs">需要管理员权限</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.system {
    background-color: v-bind('cardBgColor');
}

.border-color {
    border-color: v-bind('borderColor');
}
</style>