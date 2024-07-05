<script setup lang='ts'>
import { getTableData } from '@/api/components';
import { TABLE_SIZE_LABEL_LIST } from '@/common/const';
import { ProTableOption, ProTableRequest } from 'procomponent-tdesign-vue';
import { DropdownOption, NotifyPlugin, SizeEnum } from 'tdesign-vue-next';
import { ref } from 'vue';
import OptionSetting from '@/components/OptionSetting/index.vue';
import useProTable from '@/hooks/useTable';


const [options, request, proTableRef] = useProTable<any>([
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
        hideInSearch: true
    }
] as ProTableOption[], 
(data: ProTableRequest) => getTableData(data));


const tableSize = ref<SizeEnum>('small');

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

</script>

<template>
    <div>
        <ProTable ref="proTableRef" :size="tableSize" :options="options" :request>
            <template #tableTitle>
                <div class=" p-2">
                    表格组件
                </div>
            </template>
            <template #tableActions>
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

            </template>
            <template #table-action="{ row }">
                <t-button @click="handleRowClick(row)" :size="tableSize" theme="primary" variant="text">查看</t-button>

            </template>
        </ProTable>
    </div>
</template>

<style lang='scss'></style>