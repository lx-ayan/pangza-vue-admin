<script setup lang='ts'>
import useColor from '@/hooks/components/useColor';


const { cardBgColor } = useColor();

const activeTab = defineModel('modelValue', {
    default: 'personal'
});

</script>
<template>
    <div>
        <div class="actions rounded p-2">
            <div class="flex items-center gap-2 overflow-x-auto">
                <button @click="activeTab = 'personal'"
                    :class="`px-4 py-2 text-sm rounded whitespace-nowrap transition-colors ${activeTab === 'personal' ? 'bg-[var(--td-brand-color)] text-white' : ' hover:bg-gray-50 dark:hover:bg-[#181818]'}`">
                    个人设置
                </button>
                <button @click="activeTab = 'notification'" :class="`px-4 py-2 text-sm rounded whitespace-nowrap transition-colors ${activeTab === 'notification' ? 'bg-[var(--td-brand-color)] text-white' : ' hover:bg-gray-50 dark:hover:bg-[#181818]'} '
                    }`">
                    通知设置
                </button>
                <button @click="activeTab = 'security'"
                    :class="`px-4 py-2 text-sm rounded whitespace-nowrap transition-colors ${activeTab === 'security' ? 'bg-[var(--td-brand-color)] text-white' : ' dark:hover:bg-[#181818] hover:bg-gray-50'}`">
                    安全设置
                </button>
                <button @click="activeTab = 'system'" :class="`px-4 py-2 text-sm rounded whitespace-nowrap transition-colors ${activeTab === 'system'
                    ? 'bg-[var(--td-brand-color)] text-white' : ' dark:hover:bg-[#181818] hover:bg-gray-50'}`">
                    系统设置
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.actions {
    background-color: v-bind('cardBgColor');
}
</style>
