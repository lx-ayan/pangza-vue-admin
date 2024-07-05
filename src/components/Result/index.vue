<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
    status: {
        type: String,
        default: '200'
    },
    content: String,
    description: String,
    mainButtonText: {
        type: String,
        default: '主要操作'
    },
    descButtonText: {
        type: String,
        default: '次要操作'
    },
    showButton: {
        type: Boolean,
        default: true
    },
    showDescButton: {
        type: Boolean,
        default: true
    }
});

const emits = defineEmits<{
    (e: 'mainClick'): void,
    (e: 'descClick'): void
}>();

const iconName = computed(() => {
    switch (props.status) {
        case '200':
            return 'check-circle-filled';
        case '500':
            return 'close-circle-filled';
        case '404':
            return 'help-circle-filled';
        default:
            return 'info-circle-filled';
    }
})

const colorName = computed(() => {
    switch (props.status) {
        case '200':
            return 'var(--td-success-color)';
        case '500':
            return 'var(--td-error-color)';
        case '404':
            return 'var(--td-brand-color)';
        case '-1':
            return 'var(--td-warning-color)'
        default:
            return 'info-circle-filled';
    }
})

</script>

<template>
    <div class=" min-h-[500px] flex items-center justify-center">
        <div class="text-center">
            <t-icon size="80" :color="colorName" :name="iconName"></t-icon>
            <div class=" text-lg mt-3">
                {{ props.content || '文本内容' }}
            </div>
            <div v-if="props.description" class="mt-4">
                {{ props.description }}
            </div>
            <div v-if="showButton" class="mt-8">
                <t-button @click="emits('mainClick')">{{ props.mainButtonText }}</t-button>
                <t-button @click="emits('descClick')" v-if="props.showDescButton" theme="default"
                    style="margin-left: 20px;">
                    {{ props.descButtonText }}
                </t-button>
            </div>
        </div>
    </div>
</template>

<style lang='scss'></style>