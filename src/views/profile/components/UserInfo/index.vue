<script setup lang='ts'>
import useColor from '@/hooks/components/useColor';

const { cardBgColor } = useColor();
</script>
<template>
    <div>
        <div class="user-info rounded  p-5 ">
            <h3 class="mb-4">个人信息</h3>
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <div
                        class="w-20 h-20 bg-[var(--td-brand-color)] rounded-full flex items-center justify-center text-white">
                        <MyIcon name="User" class="w-10 h-10" />
                    </div>
                    <div>
                        <button
                            class="px-4 py-1.5 text-sm text-[var(--td-brand-color)] border border-[var(--td-brand-color)] rounded hover:bg-blue-50 transition-colors">
                            更换头像
                        </button>
                        <div class="text-xs text-gray-500 mt-2">支持 JPG、PNG 格式，大小不超过 2MB</div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm  mb-2">用户名</label>
                        <t-input value="管理员"></t-input>
                    </div>
                    <div>
                        <label class="block text-sm  mb-2">邮箱</label>
                        <t-input value="admin@example.com"></t-input>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm  mb-2">手机号</label>
                        <t-input value="+86 138 0000 0000"></t-input>
                    </div>
                    <div>
                        <label class="block text-sm  mb-2">部门</label>
                        <t-select>
                            <t-option value="a">技术部</t-option>
                            <t-option value="b">产品部</t-option>
                            <t-option value="c">运营部</t-option>
                            <t-option value="d">市场部</t-option>
                        </t-select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm  mb-2">个人简介</label>
                    <t-textarea type="textarea" defaultValue="这是一段个人简介..." />
                </div>

                <div class="flex justify-end gap-4">
                    <t-button variant="outline">
                        取消
                    </t-button>
                    <t-button
                        class="px-4 py-2 text-sm text-white bg-[var(--td-brand-color)] rounded hover:bg-[#0046b3] transition-colors">
                        保存更改
                    </t-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.user-info {
    background-color: v-bind('cardBgColor');
}
</style>