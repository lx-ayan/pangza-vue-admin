<script setup lang='ts'>

import { ProTableOption } from 'procomponent-tdesign-vue';

const options: ProTableOption[] = [
    {
        key: 'admin',
        title: 'Hello'
    }
]

async function request() {
    return {
        list: [],
        total: 10
    }
}

</script>

<template>
    <div>
        <ProTable :options="options" :request >
            <template #tableTitle>
                <div>
                    Hello Title
                </div>
            </template>
            <template #tableActions>
                    <t-button>导出</t-button>
            </template>
        </ProTable>
    </div>
</template>

<style lang='scss'></style>