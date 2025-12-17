<script setup lang='tsx'>
import { useSlots, type VNode } from 'vue';
import useColor from '@/hooks/components/useColor';

type LabelOrDescriptionOrIcon = string | VNode | Object | Function;

type ActionListOption = { label: LabelOrDescriptionOrIcon, description: LabelOrDescriptionOrIcon, value: any, icon: LabelOrDescriptionOrIcon } & OtherParam;

const { borderColor } = useColor();

const props = withDefaults(defineProps<{
    options: ActionListOption[];
    border?: boolean;
    titleColor?: string;
    descriptionColor?: string;
}>(), {
    border: true,
    titleColor: '',
    descriptionColor: 'text-gray-500'
});

const slots = useSlots();

const emits = defineEmits<{
    (e: 'click', value: any, context: ActionListOption);
}>();

function handleClick(value: any, context: ActionListOption) {
    emits('click', value, context);
}

const getLabelOrDescriptionOrIcon = (option: ActionListOption, type: 'label' | 'description' | 'icon' = "label") => {
    const slotKey = type + '-' + option.value;

    if (slots[slotKey]) {
        return slots[slotKey];
    }
    if (typeof option[type] === 'string') {
        return () => <span>{option[type]}</span>
    } else {
        return option[type];
    }
}

defineOptions({
    name: 'ActionList',
    globalComponent: true,
    inheritAttrs: false
})
</script>

<template>
    <div class="space-y-4">
        <div v-for="(item, index) in props.options" class="flex items-center justify-between py-3 border-color"
            :class="{ 'border-b': props.border && index !== props.options.length - 1 }">
            <div class="flex items-center gap-3">
                <component :is="getLabelOrDescriptionOrIcon(item, 'icon')"></component>
                <div @click="handleClick(item.value, item)">
                    <div :class="`text-sm ${props.titleColor}`">
                        <component :is="getLabelOrDescriptionOrIcon(item)"></component>
                    </div>
                    <div :class="`text-xs ${props.descriptionColor}`">
                        <component :is="getLabelOrDescriptionOrIcon(item, 'description')"></component>
                    </div>
                </div>
            </div>
            <div class="relative inline-flex items-center cursor-pointer">
                <slot :name="`action-${item.value}`" :option="item"></slot>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.border-color {
    border-color: v-bind('borderColor');
}
</style>