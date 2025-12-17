import type { FormItemProps, TdInputAdornmentProps, TdInputProps } from "tdesign-vue-next";

export interface ProFormInputProps {
    name: string;
    inputProps?: TdInputProps;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    label?: FormItemProps['label'];
    rules?: FormItemProps['rules'];
    formProps?: FormItemProps;
    inputAdornmentProps?: TdInputAdornmentProps;
}

export interface ProFormInputInstance {
    focus: () => void;
    blur: () => void;
    clear: () => void;
}