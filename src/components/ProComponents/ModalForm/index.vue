<script setup lang='ts'>
import { Dialog, type TdDialogProps } from 'tdesign-vue-next';
import type { ProFormInstance, ProFormOption, ProFormProps } from '../ProForm/index.vue';
import { useTemplateRef, watch } from 'vue';

export interface ModalFormProps {
    options: ProFormOption[];
    request?: ProFormProps['request'];
    formProps?: Optional<ProFormProps, 'options'>;
    header?: TdDialogProps['header'];
    width?: TdDialogProps['width'];
    dialogProps?: TdDialogProps;
}

const proFormRef = useTemplateRef<ProFormInstance>('proFormRef');

const emits = defineEmits<{
    (e: 'submit', data: any): void;
}>();

const props = withDefaults(defineProps<ModalFormProps>(), {
    options: () => [],
    formProps: () => ({
        formProps: {
            labelAlign: 'top'
        }
    })
});

const visible = defineModel('visible', { default: false });

function handleConfirm() {
    proFormRef.value.validate().then(res => {
        if (res === true) {
            proFormRef.value.submit();
        }
    })
}

function handleSubmit(data: any) {
    emits('submit', data);
}

defineOptions({
    name: 'ModalForm',
    globalComponent: true
})

watch(visible, (value) => {
    if (!value) {
        proFormRef.value.reset();
    } else {
        proFormRef.value.request();
    }
})

</script>

<template>
    <Dialog @confirm="handleConfirm" v-bind="{ ...$attrs, ...props.dialogProps }" :width="props.width"
        :header="props.header" v-model:visible="visible">
        <template v-for="key in Object.keys($slots)" #[key]="args">
            <slot :name="key" v-bind="args"></slot>
        </template>
        <div style="padding: 4px">

            <ProForm ref="proFormRef" :submit="handleSubmit" :request="props.request"
                :gap="{ y: props?.formProps?.formProps?.labelAlign === 'top' ? 4 : 6, x: 4 }" v-bind="props.formProps"
                hideExtra :options="props.options">
                <template v-for="key in Object.keys($slots)" #[key]="args">
                    <slot :name="key" v-bind="args"></slot>
                </template>
            </ProForm>
        </div>
    </Dialog>
</template>