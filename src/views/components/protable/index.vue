<script setup lang='ts'>
import { getTableData } from '@/api/table';
import { DATA_DELETE, DATA_DELETEBTN } from '@/common/lang';
import { t } from '@/plugins';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';
const page = ref({
    pageNum: 1,
    pageSize: 10,
    total: 10
})

const options = ref<ProTableOption[]>([
    {
        key: 'id',
        title: 'id',
        hideInSearch: true,
        ellipsis: true,
    },
    {
        key: 'title',
        title: 'title',
        width: 180
    },
    {
        key: 'views',
        title: 'views',
        ellipsis: true
    },
    {
        key: 'description',
        title: 'description',
        ellipsis: true
    },
    {
        key: 'actions',
        title: 'action',
        width: 120,
        isSlot: true,
        hideInSearch: true
    }
]);

async function request(data: ProTableRequest<TableData>) {
    const result = await getTableData(data);
    result.list = result.list.map(v => ({ ...v, title: t(v.title), description: t(v.description), views: t(v.views) }))

    return result;
}

function handleDelete(row: TableData) {
    MessagePlugin.success(`删除成功: ${JSON.stringify(row)}`)
}

</script>

<template>
    <div>
        <ProTable v-model:page="page" :options :request="request as any">
        <template #pro-table-title>
            表格组件    
        </template>
        <template #pro-table-actions>
                <t-button>新增操作</t-button>
        </template>

            <template #table-actions="{row}">
                <div>
                    <ProButton @confirm="() => handleDelete(row)" theme="link" action="popup">
                        <template #content>
                            <t-space>{{ t(DATA_DELETE) }}</t-space>
                        </template>
                        <t-space>{{ t(DATA_DELETEBTN) }}</t-space>
                    </ProButton>
                </div>
            </template>
        </ProTable>
    </div>
</template>

<style lang='scss'></style>