<script setup lang='ts'>
import useThemeStore from '@/store/themeStore';
import { createNameSpace } from '@/utils/core/css';
import { computed } from 'vue';

const props = defineProps<{
    title?: string;
    bgColor?: string;
    data?: string;
}>();

const themeStore = useThemeStore();

const { getName, b, be } = createNameSpace('data-card');

const cardBackgroundColor = computed(() => props.bgColor ? props.bgColor : themeStore.isDark ? 'var(--td-bg-color-container)' : '#fff');

</script>
<template>
    <div :class="getName() + ` dark:bg-[${cardBackgroundColor}]`">
        <div :class="b('header')">
            <div :class="be('header', 'left')">
                <div :class="createNameSpace(be('header', 'left')).e('title')">
                    <span v-if="!$slots['title']">{{ props.title }}</span>
                    <slot v-else name="title"></slot>
                </div>
                <div :class="createNameSpace(be('header', 'left')).e('data')">
                    <span v-if="!$slots['data']">{{ props.data }}</span>
                    <slot v-else name="data"></slot>
                </div>
            </div>

            <div :class="be('header', 'right')">
                <slot name="image">

                </slot>
            </div>
        </div>

        <slot name="footer">

        </slot>
    </div>
</template>

<style lang="scss" scoped>
.data-card {
    background-color: v-bind('cardBackgroundColor');
    @apply rounded-lg px-6 py-4;

    &-header {
        @apply flex items-center justify-between;

        &__left {

            &__title {
                @apply mb-4 text-gray-700 dark:text-white/60;
            }

            &__data {
                span {
                    @apply text-4xl text-gray-900 dark:text-white/75;
                }
            }
        }
    }
}
</style>