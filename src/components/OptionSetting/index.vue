<script setup lang='ts'>
import { ProTableOption } from 'tdesign-pro-component';
import { computed, onMounted } from 'vue';
import { PropType, ref } from 'vue';

const props = defineProps({
    options: {
        type: Array as PropType<ProTableOption[]>,
        default: () => ([])
    },
    disabledIndex: {
        type: Array as PropType<number[]>,
        default: () => ([])
    },
    modelValue: {
        type: Array as PropType<any[]>,
        default: () => ([])
    }
});

const emits = defineEmits(['change']);

const constValue = ref<any[]>([]);

const innerOptions = ref<{label: string, value: string, disabled: boolean}[]>([]);

const checkValue = ref<any>([]);

onMounted(() => {
    props.options.filter(item => !item.hideInTable).forEach((item, index) => {
        innerOptions.value.push({
            label: item.title,
            value: item.key,
            disabled: props.disabledIndex.includes(index)
        });
    });
    constValue.value = innerOptions.value.filter(item => item.disabled).map(item => item.value);
    checkValue.value = innerOptions.value.map(item => item.value);
})

function handleChange(value: any) {
    checkValue.value = Array.from(new Set([...checkValue.value, ...value]));
    emits('change', checkValue.value);
}

function handleAllChange(value: any) {
    if (value) {
        checkValue.value = Array.from(new Set([...constValue.value, ...innerOptions.value.map(item => item.value)]));
    } else {
        checkValue.value = [...constValue.value]
    }
    emits('change', checkValue.value);
}

const checkAll = computed(() => checkValue.value.length == innerOptions.value.length);

const indeterminate = computed(() => {
    return checkValue.value.length > 0 && checkValue.value.length < innerOptions.value.length;
});

</script>

<template>
        <t-popup class="rounded-sm" placement="bottom-left">
            <template v-if="innerOptions.length" #content>
                <div class="w-[220px] p-2">
                    <div class="text-[#cdcdcd]">列设置</div>
                    <div class="mt-2">
                        <t-col class="leading-[30px]" :span="12">
                            <t-checkbox @change="handleAllChange" :indeterminate="indeterminate" :checked="checkAll"
                                label="全选" />
                        </t-col>
                        <t-checkbox-group v-model="checkValue" @change="handleChange">
                            <t-row>

                                <t-col class="leading-[30px]" :span="12" v-for="item in innerOptions">
                                    <t-checkbox :key="item.value" :disabled="item.disabled" :value="item.value">{{
                                        item.label }}</t-checkbox>
                                </t-col>
                            </t-row>
                        </t-checkbox-group>
                    </div>
                </div>
            </template>
            <t-button class="rounded-sm" variant="text">
                <template #icon>
                    <t-icon name="setting-1"></t-icon>
                </template>

            </t-button>
        </t-popup>
</template>

<style scoped>
</style>
