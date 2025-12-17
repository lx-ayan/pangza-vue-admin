<script setup lang='tsx'>
import { getUserList } from '@/api/user';
import CircleTag from '@/components/public/CircleTag/index.vue';
import { getCssVar } from '@/utils/core/css';
import TablePropsButton from '@/components/business/TablePropsButton/index.vue';
import TableOptionButton from '@/components/business/TableOptionButton/index.vue';
import TableSizeButton from '@/components/business/TableSizeButton/index.vue';
import TableShowSearchButton from '@/components/business/TableShowSearchButton/index.vue';
import { computed, ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import type { ProTableOption, ProTableRequest } from '@/components/ProComponents/ProTable/types';
const hideForm = ref(false);
const tablePropsButton = ref<string[]>([]);
const size = ref('medium');

const options = ref<ProTableOption[]>([

    {
        key: 'username',
        label: '用户名',
        tableProps: {
            width: 320
        },
    },
    {
        key: 'sex',
        label: '性别',
        hideInSearch: true,
        tableProps: {
            width: 120
        },
        render: (_row, rowIndex) => {
            return <span>
                {rowIndex % 2 !== 0 ? '男' : '女'}
            </span>
        }
    },
    {
        key: 'phone',
        label: '联系方式',
    },
    {
        key: 'address',
        label: '居住地址',
        hideInSearch: true,
        tableProps: {
            width: 320
        },
    },
    {
        key: 'birthday',
        label: '出生日期',
        hideInSearch: true
    },
    {
        key: 'status',
        label: '当前状态',
        hideInSearch: true,
        render: (_row, rowIndex) => {
            return <CircleTag color={getCssVar(rowIndex % 2 == 0 ? '--td-success-color' : '--td-error-color')}>
                {rowIndex % 2 == 0 ? '在线' : '离线'}
            </CircleTag>
        }
    },
    {
        key: 'actions',
        label: '操作',
        hideInSearch: true
    }
])

function request(data: ProTableRequest) {
    return getUserList(data);
}

const tableProps = computed(() => ({
    bordered: tablePropsButton.value.includes('border'),
    stripe: tablePropsButton.value.includes('stripe'),
    hover: tablePropsButton.value.includes('hover'),
    size: size.value
}))

</script>
<template>
    <div class="">
        <ProTable :hideForm :tableProps="{ size: 'small', ...tableProps }" :request="request" :options>
            <template #pro-table-title>
                <t-button>
                    新增用户
                </t-button>
            </template>

            <template #pro-table-actions>
                <t-space>
                    <TableOptionButton v-model="options" />
                    <TableSizeButton v-model="size" />
                    <TablePropsButton v-model="tablePropsButton" />
                    <TableShowSearchButton v-model="hideForm" />
                </t-space>
            </template>
            <template #table-username="{ row }">
                <t-space class="items-center">
                    <t-image :style="{ width: '40px', height: '40px' }" class="rounded-lg" fit="cover"
                        :src="row.avatar"></t-image>
                    <div>
                        <div>{{ row.username }}</div>
                        <div>{{ row.email }}</div>
                    </div>
                </t-space>
            </template>
            <template #table-actions="{ row }">
                <t-space>
                    <t-link @click="() => MessagePlugin.success('编辑:' + JSON.stringify(row))" hover="color"
                        theme="primary">编辑</t-link>
                    <t-link @click="() => MessagePlugin.error('删除:' + JSON.stringify(row))" hover="color"
                        theme="danger">删除</t-link>
                </t-space>
            </template>
        </ProTable>
    </div>
</template>