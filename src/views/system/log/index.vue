<script setup lang="ts">
import { ModalFormRef, ProFormOption, ProTableOption, ProTableRef, ProTableRequest } from 'tdesign-pro-component';
import { ref } from 'vue';

interface CRUDData {
    id?: string;
    method?: string;
    message?: string;
    createtime?: Date | string;
    data?: string;
}

const currentId = ref<NullAble<string>>(null);

const visible = ref(false);

const proTableRef = ref<NullAble<ProTableRef>>(null);

const modalRef = ref<NullAble<ModalFormRef>>();

let data: CRUDData[] = [
    {
        id: '1',
        method: 'method',
        message: 'success',
        data: 'data',
        createtime: '2024-12-22'
    },
    {
        id: '2',
        method: 'method',
        message: 'success',
        data: 'data',
        createtime: '2024-12-22'
    },
    {
        id: '3',
        method: 'method',
        message: 'success',
        data: 'data',
        createtime: '2024-12-22'
    },
    {
        id: '4',
        method: 'method',
        message: 'success',
        data: 'data',
        createtime: '2024-12-22'
    }
]

const options = ref<ProTableOption[]>([
    {
        title: 'id',
        key: 'id',
        hideInSearch: true
    },
    {
        title: 'method',
        key: 'method'
    },
    {
        title: 'data',
        key: 'data'
    },
    {
        title: 'createtime',
        key: 'createtime',
        type: 'datepicker'
    },
    {
        title: 'extra',
        key: 'actions',
        hideInSearch: true,
        isSlot: true
    }
]);

const formOption = ref<ProFormOption[]>([
    {
        label: 'id',
        disabled: true,
        name: 'id',
        hidden: currentId.value === null
    },
    {
        label: 'method',
        name: 'method'
    },
    {
        label: 'data',
        name: 'data'
    },
    {
        label: 'createtime',
        name: 'createtime',
        type: 'datepicker',
        datepickerProps: {
            style: 'width: 100%'
        }
    }
]);

function submitFunction(param: CRUDData) {
    data.push({
        ...param,
        id: new Date().getTime() + ''
    });
}

function updateFunction(param: CRUDData) {
    const index = data.findIndex(item => item.id == param.id!);
    data[index] = param;
}

function tableRequest(_param: ProTableRequest) {
    return Promise.resolve({
        total: data.length,
        list: data
    })
}

function formRequest() {
    if (currentId.value) {
        return Promise.resolve(data.find(item => item.id == currentId.value));
    } else {
        return Promise.resolve(null);
    }
}

function handleClick(id: NullAble<string> = null) {
    currentId.value = id;
    const hidden = currentId.value === null ? true : false;
    formOption.value[0].hidden = hidden;
    visible.value = true;
}

function handleDelete(id: string) {
    const index = data.findIndex(item => item.id == id);
    data.splice(index, 1);
    proTableRef.value?.reset();
}

function handleSubmit(submitData: CRUDData) {
    const fn = currentId.value === null ? submitFunction : updateFunction;
    fn(submitData);
    visible.value = false;
    setTimeout(() => {
        modalRef.value?.reset();
        proTableRef.value?.reset();
    }, 100);
}

</script>

<template>
    <div>
        <ModalForm :proFormProps="{submitFilter: false}" ref="modalRef" @submit="handleSubmit" width="600px" :header="currentId ? '修改操作' : '新增操作'"
            v-model:visible="visible" :options="formOption" :request="formRequest" />
        <ProTable ref="proTableRef" :request="tableRequest" :options="options">
            <template #pro-table-title>
                <div>普通的 CRUD</div>
            </template>
            <template #pro-table-actions>
                <div>
                    <t-button @click="() => handleClick()">新增记录</t-button>
                </div>
            </template>

            <template #table-actions="{ row }">
                <div>
                    <t-link @click="() => handleClick(row.id)" style="margin-right: 20px;" theme="primary"
                        hover="color">
                        编辑
                    </t-link>
                    <ProButton @confirm="() => handleDelete(row.id)" theme="link" action="popup">
                        <template #content>
                            <t-space>是否删除该数据？</t-space>
                        </template>
                        <t-space>删除</t-space>
                    </ProButton>
                </div>
            </template>
        </ProTable>
    </div>
</template>