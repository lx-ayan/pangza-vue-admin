import type { FormItemProps, TdTextareaProps } from "tdesign-vue-next";

export interface ProFormTextareaProps {
    name: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    label?: FormItemProps['label'];
    rules?: FormItemProps['rules'];
    formProps?: FormItemProps;
    textareaProps?: TdTextareaProps;
}