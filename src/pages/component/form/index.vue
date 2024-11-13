<script setup lang='ts'>
import useProForm from '@/hooks/useForm';
import { ref } from 'vue';
import Result from '@/components/Result/index.vue';

const [options, request, proFormRef] = useProForm([
    {
        name: 'type',
        label: '物业类型',
        type: 'radio',
        span: 12,
        data: [
            { label: '商铺', value: 'sp' },
            { label: '写字楼', value: 'xzl' },
            { label: '厂房', value: 'cf' },
            { label: '仓库', value: 'ck' },
            { label: '土地', value: 'td' },
            { label: '车位', value: 'cw' }
        ],
        rules: [
            { required: true, message: '请选择物业类型' }
        ],
        radioProps: {
            border: true
        }
    },
    {
        name: 'businessType',
        label: '业务类型',
        span: 12,
        type: 'radio',
        data: [
            { label: '出售', value: 'sale' },
            { label: '出租', value: 'rent' }
        ],
        formItemProps: {
            tips: '(如果同时办理出售和出租业务，可以在本次登记完成后的界面操作【转租】和【转售】)'
        },
        rules: [
            { required: true, message: '请选择物业类型' }
        ],
    },
    {
        name: 'title',
        label: '标题',
        span: 11,
        rules: [
            { required: true, message: '请输入标题' }
        ],
        formItemProps: {
            labelAlign: 'top',
            requiredMark: true,
        },

    }
], async () => ({ type: 'sp' }));

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
    <t-card title="商业登记" :bordered="false">

        <t-row>
            <t-col :span="2"></t-col>
            <t-col :span="8">
                <ProForm v-if="!successAble" @submit="handleSubmit" :request :options ref="proFormRef">

                </ProForm>
                <Result v-else @main-click="handleMainClick" main-button-text="继续登记" desc-button-text="返回列表"
                    status="200" description="提交表单操作成功，您可以选择继续添加或返回列表" content="操作成功"></Result>
            </t-col>
            <t-col :span="2"></t-col>
        </t-row>
    </t-card>
</template>

<style lang='scss'></style>