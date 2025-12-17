import { type BaseTableCol, type BaseTableProps, type TableCol, type TableInstanceFunctions, type TableProps, type TdFormItemProps, type TdPaginationProps } from 'tdesign-vue-next';
import type { FormItemPropsMap, ProFormInstance, ProFormOption, ProFormProps } from '../ProForm/types';

export interface ProTableProps {
    options: ProTableOption[];
    data?: any[];
    request?: (data: any) => (ProTableResult | Promise<ProTableResult>);
    formProps?: Optional<ProFormProps, 'options'>;
    hideForm?: boolean;
    hidePage?: boolean;
    draggAble?: boolean;
    selectAble?: boolean;
    tableProps?: TableProps;
    rowKey?: string;
    selectType?: 'multiple' | 'single';
    pageProps?: TdPaginationProps;
}

export interface ProTableResult<T = any> {
    list: T[];
    total: number;
    pageSize?: number;
    pageNum?: number;
    pages?: number;
    [key: string]: any;
}

export interface ProTableOption<T = any, K extends keyof FormItemPropsMap = 'input'> {
    key: string;
    label?: string;
    formLabel?: TdFormItemProps['label'];
    tableTitle?: BaseTableProps['columns'][number]['title'];
    span?: number;
    type?: ProFormOption['type'];
    data?: ProFormOption['data'];
    hideInSearch?: boolean | (() => boolean);
    hideInTable?: boolean | (() => boolean);
    tableProps?: BaseTableCol;
    formProps?: Optional<FormItemPropsMap[K], 'name'> | Record<string, any>;
    formSlots?: any;
    defaultValue?: any;
    edit?: TableCol['edit'];
    render?: (row: T, rowIndex: number) => any;
}

export interface ProTableInstance {
    getFormValue: () => any;
    reset: () => void;
    reload: () => void;
    validate: TableInstanceFunctions['validateTableData'],
    clearValidate: TableInstanceFunctions['clearValidateData'],
    getFormInstance: () => ProFormInstance,
    getTableInstance: () => TableInstanceFunctions
}

export interface ProTableRequest<T = any> {
    pageNum: number;
    pageSize: number;
    form: T;
    sort?: Record<string, 'asc' | 'desc'>
}
