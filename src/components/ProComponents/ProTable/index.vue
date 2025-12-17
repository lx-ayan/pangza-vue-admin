<script setup lang='tsx'>
import { createNameSpace } from '@/utils/core/css';
import { Card, Table, type BaseTableCol, Pagination, type PageInfo, type BaseTableColumns, type TableCol, type DragSortContext, type TableProps, type SelectOptions, type TableInstanceFunctions, type TdPaginationProps } from 'tdesign-vue-next';
import { computed, onMounted, ref, useSlots, useTemplateRef, watch } from 'vue';
import ProForm from '../ProForm/index.vue';
import { ChevronDownIcon, ChevronUpIcon, MoveIcon } from 'tdesign-icons-vue-next';
import { isFunction } from 'lodash-es';
import type { ProFormInstance, ProFormOption, ProFormProps } from '../ProForm/types';
import type { ProTableOption, ProTableResult } from './types';

const COMPONENT_NAME = 'pro-table';

const proTableBEM = createNameSpace(COMPONENT_NAME);

const props = withDefaults(defineProps<{
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
}>(), {
    rowKey: 'id',
    options: () => []
});

const tableRef = useTemplateRef<TableInstanceFunctions>('tableRef');

const proFormOptions = ref<ProFormOption[]>([]);

const proFormRef = useTemplateRef<ProFormInstance>('proFormRef');

const tableColumns = ref<BaseTableCol[]>([]);

const loading = ref(false);

const slotsKeyArr = ref<string[]>([]);

const selectData = defineModel<any>('selectData', {
    default: () => ({ values: undefined })
});

let formModelValue: any = {};

const page = ref({
    total: 0,
    pageNum: 1,
    pageSize: props?.pageProps?.pageSize || 10
});

const innerData = ref<any[]>([]);

const formData = ref<any>({});

const showMore = ref(false);

const slots = useSlots();

const emits = defineEmits(['update:data']);

onMounted(() => {
    buildOptions();
    buildTableColumns();
    request(1, page.value.pageSize);
    slotsKeyArr.value = Object.keys(slots).map(item => (item.includes('table-') && item.startsWith('table-')) ? item.replace('table-', '') : item);
})

function buildOptions() {
    //@ts-ignore
    proFormOptions.value = props.options.filter(item => isFunction(item.hideInSearch) ? !item.hideInSearch() : !item.hideInSearch
    ).map((item, index) => {
        if (item.defaultValue) {
            formData.value[item.key] = item.defaultValue;
        }
        return {
            name: item.key,
            label: item.formLabel || item.label,
            type: item.type || 'input',
            data: item.data || [],
            gridProps: {
                colSpan: item.span || 6
            },
            props: {
                ...item.formProps
            },
            slots: {
                ...item.formSlots
            },
            hidden: showMore.value !== true && index >= 3
        }
    });
}

function buildTableColumns() {
    tableColumns.value = getColumnsProps(props.options.filter(item => isFunction(item.hideInTable) ? !item.hideInTable() : !item.hideInTable));
}

function getColumnsProps(tableOptions: ProTableOption[]) {
    const options: BaseTableColumns = tableOptions.map(item => {
        const option: TableCol = {
            colKey: item.key,
            title: item.tableTitle || item.label,
            ellipsis: item.tableProps?.ellipsis || false,
            ...item.tableProps,
        }
        if (item.render) {
            option.cell = (_h, { row, rowIndex }) => {
                return item.render!(row, rowIndex);
            }
        }
        if (item.edit) {
            option['edit'] = {
                ...item.edit,
                onEdited: (context) => {
                    if (item.edit!.onEdited) {
                        item.edit!.onEdited(context);
                    } else {
                        innerData.value[context.rowIndex] = context.newRowData as unknown as any;
                    }
                }
            }
        }
        return option;
    });
    initSelectTable(options);
    initDragTable(options);
    return options;
}

function initSelectTable(options: TableCol[]) {
    if (options.filter(item => item.colKey === 'row-select').length > 0) return
    if (props.selectAble) {
        options.unshift({
            colKey: 'row-select',
            type: props.selectType || 'multiple',
            width: 46,
        })
    }

    return options;
}

function initDragTable(options: TableCol[]) {
    if (options.filter(item => item.colKey === 'drag').length > 0) return
    if (props.draggAble) {
        options.unshift({
            colKey: 'drag',
            cell: () => (
                <span>
                    <MoveIcon />
                </span>
            ),
            width: 46,
        })
    }
}


function handleSetShowMore() {
    showMore.value = !showMore.value
    buildOptions();
}

async function request(pageNum: number, pageSize: number) {
    if (props.request) {
        try {
            loading.value = true
            const result = await props.request({
                pageNum,
                form: formModelValue,
                pageSize
            });
            innerData.value = result.list;
            page.value.pageNum = pageNum;
            page.value.pageSize = pageSize;
            page.value.total = result.total;
        } finally {
            loading.value = false;
        }
    } else {
        if (props.data) {
            innerData.value = props.data;
        }
    }
}

function handlePageChange(pageInfo: PageInfo) {
    request(pageInfo.current, pageInfo.pageSize);
}

async function handleSubmit(data: any) {
    formModelValue = data;
    request(1, page.value.pageSize);
}

function handleResetClick() {
    reset();
    request(1, page.value.pageSize)
}

function reset() {
    formModelValue = {};
    proFormRef.value?.reset();
}

function handleDragSort(params: DragSortContext<any>) {
    innerData.value = params.newData;
}

function handleSelectChange(values: string[], context: SelectOptions<any>) {
    selectData.value = {
        values,
        context
    }
}

const colSpan = computed(() => {
    let colSpanList: number[] = [];
    const validItems = proFormOptions.value.filter(item => !item.hidden);

    for (const item of validItems) {
        const colSpan = item.gridProps.colSpan;
        if (colSpan >= 24) {
            colSpanList = [];
        } else {
            colSpanList.push(colSpan);
        }
    }

    if (colSpanList.length === 0) {
        return 24;
    }

    if (colSpanList[colSpanList.length - 1] === 24) {
        return 24;
    }

    const totalUsed = colSpanList.reduce((pre, current) => pre + current, 0);
    const remaining = 24 - (totalUsed % 24);

    return remaining === 0 ? 24 : remaining;
})

defineOptions({
    name: 'ProTable'
})

watch(() => props.options, () => {
    buildOptions();
    buildTableColumns();
}, { deep: true });

watch(() => props.data, (value) => {
    innerData.value = value;
}, { deep: true });


watch(innerData, (value) => {
    emits('update:data', value);
}, { deep: true });

defineExpose({
    getFormValue: () => {
        return proFormRef.value.getFormValue();
    },
    reset: () => {
        reset();
        request(page.value.pageNum, page.value.pageSize);
    },
    reload: () => {
        handleResetClick();
    },
    validate: () => {
        return tableRef.value?.validateTableData()
    },
    clearValidate: () => {
        return tableRef.value?.clearValidateData()
    },
    getFormInstance: () => proFormRef.value,
    getTableInstance: () => tableRef.value
})

watch(() => [props.selectAble, props.draggAble], () => getColumnsProps(props.options))
</script>

<template>
    <div :class="COMPONENT_NAME">
        <Card v-show="props.hideForm !== true && proFormOptions.length !== 0" :bordered="false"
            :class="proTableBEM.e('form')">
            <template v-if="slots['pro-table-header']" #header>
                <slot name="pro-table-header"></slot>
            </template>
            <ProForm v-model="formData" ref="proFormRef" v-model:loading="loading" :submit="handleSubmit"
                :formProps="{ labelAlign: 'left', ...props?.formProps?.formProps }" :gap="{ x: 8, y: 4 }"
                :options="proFormOptions">
                <template v-for="key in slotsKeyArr" #[key]="args">
                    <slot :name="key" v-bind="{ ...args }"></slot>
                </template>

                <template #extra>
                    <GridItem style="display:flex; justify-content: flex-end;" :colSpan="colSpan">
                        <t-space>
                            <t-button type="submit" :loading="loading">查询</t-button>
                            <t-button @click="handleResetClick" type="reset" variant="outline">重置</t-button>
                            <t-button v-if="proFormOptions.length > 3" @click="handleSetShowMore" variant="text">
                                <div style="display:flex; align-items: center;">
                                    <span style="margin-right: 2px;">{{ showMore ? '收起' : '展开' }}</span>
                                    <ChevronUpIcon v-if="showMore" />
                                    <ChevronDownIcon v-else />
                                </div>
                            </t-button>
                        </t-space>
                    </GridItem>
                </template>
            </ProForm>
        </Card>

        <Card :bordered="false" :class="proTableBEM.e('body')">

            <template v-if="slots['pro-table-title']" #title>
                <slot name="pro-table-title"></slot>
            </template>

            <template v-if="slots['pro-table-actions']" #actions>
                <slot name="pro-table-actions"></slot>
            </template>
            <Table v-if="!slots['card']" ref="tableRef" :select-row-keys="selectData.values"
                @select-change="handleSelectChange" @drag-sort="handleDragSort"
                :drag-sort="(props.draggAble ? (props.tableProps?.dragSort || 'row-handler') : undefined) as unknown as any"
                :data="innerData" :columns="tableColumns" v-bind="{ ...$attrs, ...props.tableProps }"
                :row-key="props.rowKey">
                <template v-for="key in slotsKeyArr" #[key]="args">
                    <slot :name="`table-${key}`" v-bind="{ ...args }"></slot>
                </template>
            </Table>

            <slot v-else name="card" :list="innerData"></slot>

            <slot name="footer-action"></slot>

            <div :class="proTableBEM.e('pagination')" v-if="props.hidePage !== true">
                <Pagination @change="handlePageChange" v-bind="props.pageProps" v-model="page.pageNum"
                    v-model:pageSize="page.pageSize" :total="page.total">
                </Pagination>
            </div>
        </Card>
    </div>
</template>

<style lang="scss">
.pro-table {
    &__form {
        margin-block-end: 16px;
    }

    &__pagination {
        margin-top: 40px;
    }
}
</style>