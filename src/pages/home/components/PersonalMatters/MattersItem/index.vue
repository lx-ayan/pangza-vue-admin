<script setup lang='ts'>
import themeStore from '@/store/theme';
import { PropType } from 'vue';

const useThemeStore = themeStore();

const props = defineProps({
    data: {
        type: Object as PropType<IMattersItem>,
    }
})
</script>

<template>
    <div v-if="props.data" class="flex items-center justify-between py-2 px-3  rounded"
        :class="[useThemeStore.theme === 'dark' ? ' border  border-[#555] ' : 'bg-[#f6f7ff]']">
        <div>
            <div>
                <t-badge v-if="props.data.dot" dot :count="2">
                    {{ props.data.title }}
                </t-badge>
                <span v-else>{{ props.data.title }}</span>
            </div>

            <div class="text-[#92939b] text-[12px] mt-1">
                <span>
                    {{ props.data.description }}
                </span>
                <span class="ml-2">
                    {{ props.data.createtime }}
                </span>
            </div>
        </div>
        <div class="text-[#92939b]">
            <t-icon size="23" name="chevron-right"></t-icon>
        </div>
    </div>
</template>

<style lang='scss'>
// * {
//     color: #92939b;
// }</style>