<script setup>
import { MessagePlugin } from 'tdesign-vue-next';

const options = [
    {
        key: 'username',
        label: '用户名',
        onSave(key, value, form, index) {
            MessagePlugin.success(`第${index}个, key: ${key}, value: ${value}, form: ${JSON.stringify(form)}`)
        },
        onCancel() {
            MessagePlugin.warning('取消保存')
        },
    },
    {
        key: 'age',
        label: '年龄'
    },
    {
        key: 'address',
        label: '居住地址'
    },
    {
        key: 'sex',
        label: '性别',
        type: 'radio',
        data: [{ label: '男', value: '1' }, { label: '女', value: '2' }]
    },
    {
        key: 'political',
        label: '政治面貌',
        type: 'select',
        data: [{ label: '党员', value: '1' }, { label: '群众', value: '2' }]
    },
    {
        key: 'marriage',
        label: '婚姻情况'
    },
    {
        key: 'description',
        label: '个人描述'
    }
]

function request() {
    return Promise.resolve({
        username: '刘军',
        marriage: '未婚',
        political: '1',
        sex: '1',
        address: '安徽省淮北市相山区恒大雅苑三栋二单元2406',
        age: '25',
        description: '个人爱打游戏，吃坚果，骑车，旅游。'
    });
}

</script>

<template>
    <div>
        <t-card :bordered="false" size="small">
            <ProDescription editable :column="4" title="基本信息表" :options="options" :request="request" />
        </t-card>
    </div>
</template>

<style lang='scss'></style>