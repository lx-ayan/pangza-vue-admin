<script setup lang='tsx'>
import { getTableData } from '@/api/components';
import { TABLE_SIZE_LABEL_LIST } from '@/common/const';
import { DropdownOption, NotifyPlugin, SizeEnum } from 'tdesign-vue-next';
import { ref } from 'vue';
import OptionSetting from '@/components/OptionSetting/index.vue';
import useProTable from '@/hooks/useTable';
import useXLSX from '@/hooks/useXLSX';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';

const dataList = ref<any[]>([]);
interface VO {
    id?: number;
    username?: string;
    title?: string;
    description?: string;
    address?: string;
    code?: string;
    createtime?: string;
};

const [options, request, proTableRef] = useProTable<VO>([
    {
        key: 'id',
        title: '序号',
        hideInSearch: true,
    },
    {
        key: 'username',
        title: '名称'
    },
    {
        key: 'title',
        title: '标题'
    },
    {
        key: 'description',
        title: '描述',
        ellipsis: true
    },
    {
        key: 'address',
        title: '地址',
        ellipsis: true
    },
    {
        key: 'createtime',
        title: '创建时间',
        type: 'date'
    },
    {
        key: 'action',
        title: '操作',
        isSlot: true,
        hideInSearch: true,
        render: ({ row }) => {
            return <t-button onClick={() => handleRowClick(row)} size={tableSize} theme="primary" variant="text">查看</t-button>
        }
    }
] as ProTableOption[],
    async (data: ProTableRequest) => {
        const result = await getTableData(data);
        dataList.value = result.list;
        return result;
    });

const [_xlsx, doExport, doRead] = useXLSX(options.value, { json: true });

const tableSize = ref<SizeEnum>('medium');

const inputRef = ref();

const page = ref({ pageNum: 1, pageSize: 10 });

function handleDropdownClick({ value }: DropdownOption) {
    tableSize.value = value as SizeEnum;
}

function handleOptionChange(opt: string[]) {
    options.value.forEach((item) => {
        item.hideInTable = !opt.includes(item.key);
    })
}

function handleRowClick(row: any) {
    NotifyPlugin.info({
        title: '系统提示',
        closeBtn: true,
        content: `当前点击的数据是: 【${JSON.stringify(row)}】`
    })
}

function handleDownload() {
    doExport(dataList.value, 'demo.xlsx');
}

async function handleFileChoose(e) {
    NotifyPlugin.success({
        title: '系统提示',
        content: '注意看控制台',
        closeBtn: true
    })
    console.log(`导出数据为：`, await doRead(e.target.files[0]) as any[]);
}

function handleImportClick() {
    inputRef.value.click();
}

</script>

<template>
    <div class="flex items-center">
        <ProTable loading v-model:page="page" ref="proTableRef" :size="tableSize" :options="options" :request>
            <template #pro-table-title>
                <div class=" p-2">
                    表格组件
                </div>
            </template>
            <template #pro-table-actions>
                <div>
                    <t-button v-permission="'role_ADMIN'">新增数据</t-button>
                    <t-button style="margin-left: 8px;" variant="outline"><t-icon name="more"></t-icon></t-button>
                    <t-tooltip content="密度">
                        <t-dropdown @click="handleDropdownClick"
                            :options="TABLE_SIZE_LABEL_LIST.map(item => ({ content: item.label, value: item.value }))">
                            <t-button theme="default" variant="text" style="margin-left: 4px;">
                                <template #icon>
                                    <t-icon style="transform: rotateZ(90deg); transform-origin: center;"
                                        name="expand-horizontal"></t-icon>
                                </template>
                            </t-button>
                        </t-dropdown>
                    </t-tooltip>
                    <t-tooltip content="列设置">
                        <OptionSetting @change="handleOptionChange" :options />
                    </t-tooltip>

                    <t-tooltip content="下载数据">
                        <t-button @click="handleDownload" theme="default" variant="text">
                            <template #icon>
                                <t-icon name="download"></t-icon>
                            </template>
                        </t-button>
                    </t-tooltip>
                    <input @change="handleFileChoose" ref="inputRef" type="file" style="display: none" />
                    <t-button @click="handleImportClick" theme="default" variant="text">
                        <template #icon>
                            <t-icon name="upload"></t-icon>
                        </template>
                    </t-button>
                </div>
            </template>
            <template #table-action="{ row }">

            </template>
        </ProTable>
    </div>
</template>

<style lang='scss'></style>