<script setup lang='ts'>
import type { FormItemProps, TdSelectProps } from 'tdesign-vue-next';
import { FormItem, Select, Option } from 'tdesign-vue-next';
import { getCurrentInstance, onMounted, ref, watch } from 'vue';
import { buildOptionData } from '@/utils/components';


const vm = getCurrentInstance();

const props = withDefaults(defineProps<{
    name: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    label?: FormItemProps['label'];
    rules?: FormItemProps['rules'];
    formProps?: FormItemProps;
    keyname?: string;
    valuename?: string;
    data?: OptionData[] | (() => OptionData[]) | (() => Promise<OptionData[]>);
    selectProps?: TdSelectProps;
}>(), {
    keyname: 'label',
    valuename: 'value',
    data: () => []
});

const innerData = ref<ISelectData[]>([]);

const modelValue = defineModel('modelValue');

onMounted(() => {
    buildInnerData();
})

async function buildInnerData() {
    innerData.value = await buildOptionData(props.data, props.keyname, props.valuename);
}

function getRef(selectRef) {
    vm.exposed = selectRef ? {
        reset: buildInnerData,
        clear: () => {
            modelValue.value = props.selectProps?.multiple ? [] : '';
        }
    } : {};
}

defineOptions({
    name: 'ProFormSelect',
    inheritAttrs: false
});

watch(() => props.data, buildInnerData, { deep: true });
</script>
<template>
    <FormItem :label="props.label" :rules="props.rules" :name="props.name" v-bind="{ ...props.formProps }">
        <template #label>
            <slot name="label"></slot>
        </template>

        <Select :ref="getRef" v-bind="{ ...$attrs, ...props.selectProps }" :disabled="props.disabled"
            :readonly="props.readonly" :placeholder="props.placeholder" v-model="modelValue">
            <Option :key="item.value" :label="item.label" v-for="item in innerData"
                :disabled="props.disabled || item.disabled" :value="item.value">
                <template v-if="!$slots['option-' + item.value]">
                    <component v-if="item.render" :is="item.render(item)"></component>
                    <template v-else>
                        {{ item.label }}
                    </template>
                </template>
                <slot v-else :name="`option-${item.value}`" :option="item">

                </slot>
            </Option>
        </Select>

    </FormItem>
</template>