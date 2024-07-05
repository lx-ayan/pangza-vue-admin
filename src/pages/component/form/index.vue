<script setup lang='ts'>
import useProForm from '@/hooks/useForm';
import { ref } from 'vue';
import Result from '@/components/Result/index.vue';

const [options, request, proFormRef] = useProForm([
    {
        name: 'name',
        label: '姓名（输入框）',
        placeholder: '请输入姓名',
        rules: [{ required: true, message: '请输入姓名' }]
    },
    {
        name: 'age',
        label: '年龄（数字输入框）',
        type: 'number',
        inputNumberAttrs: { theme: 'normal', style: 'width: 100%', placeholder: '请输入年龄' },
    },
    {
        name: 'educational',
        label: '学历（下拉选择器[静态选项数据]）',
        type: 'select',
        selectAttrs: {
            placeholder: '请选择学历',
        },
        optionData: [{ label: '大专', value: '1' }, { label: '本科', value: '2' }, { label: '研究生', value: '3' }]
    },
    {
        label: '配送方式（单选框[请求选项数据]）',
        name: 'shipping',
        type: 'radio',
        optionData: () => Promise.resolve([{ label: '送货上门', value: '1' }, { label: '放到驿站', value: '2' }, { label: '放在快递柜', value: '3' }])
    },
    {
        label: '创建时间',
        type: 'date',
        name: 'createtime'
    },
    {
        label: '爱好（复选框，含默认值）',
        name: 'likes',
        type: 'checkbox',
        optionData: [{ label: 'Vue', value: '1' }, { label: 'React', value: '2' }, { label: 'webpack', value: '3' }, { label: 'vite', value: '4' }],
        value: ['1']
    },
    {
        label: '上传图片（含默认值）',
        name: 'upload',
        type: 'upload',
        value: 'https://img.alicdn.com/bao/uploaded/i1/1993730769/O1CN01zf9TBm1HYFQRw2xeX_!!0-item_pic.jpg',
        uploadAttrs: {
            actions: '/api/demo',
            theme: 'image'
        },
        col: 12
    }

], async () => null);

const successAble = ref(false);

function handleSubmit() {
    successAble.value = true;
}

function handleMainClick() {
    proFormRef.value?.reset();
    proFormRef.value?.initForm();
    successAble.value = false;
}

</script>

<template>
    <t-card size="small" :bordered="false">
        <ProForm v-if="!successAble"@submit="handleSubmit" :request :options ref="proFormRef"></ProForm>
        <Result  v-else @main-click="handleMainClick" main-button-text="继续登记" desc-button-text="返回列表" status="200" description="提交表单操作成功，您可以选择继续添加或返回列表" content="操作成功"></Result>
    </t-card>
</template>

<style lang='scss'></style>