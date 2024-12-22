<script setup lang="tsx">
import { ref } from 'vue';
import { ProFormOption, ProForm } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
    },
    {
        name: 'url',
        label: '域名',
        type: 'select',
        data: [
            { label: '胖砸IT社区', value: 'https://pangzablog.cn' },
            { label: '百度', value: 'https://www.baidu.com' }
        ]
    },
    {
        name: 'payMethod',
        label: '支付方式',
        type: 'radio',
        data: [
            { label: '支付宝', value: '1' },
            { label: '微信', value: '2' }
        ]
    },
    {
        name: 'payOther',
        label: '附加条款',
        type: 'checkbox',
        rules: [
            { required: true, message: '请输入用户名' }
        ],
        data: [
            { label: '车贷', value: '1' },
            { label: '房贷', value: '2' }
        ]
    },
    {
        name: 'submitDate',
        label: '交款日期',
        type: 'datepicker',
        initalValue: '',
        datepickerProps: {
            format: 'YYYY-MM-DD',
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'money',
        label: '交付金额',
        type: 'number',
        numberProps: {
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'address',
        label: '地区',
        type: 'treeSelect',
        valueName: 'valueName',
        data: [{
            label: '广东省',
            valueName: 'guangdong',
            children: [{
                label: '广州市',
                valueName: 'guangzhou',
            }, {
                label: '深圳市',
                valueName: 'shenzhen',
            }],
        }, {
            label: '江苏省',
            valueName: 'jiangsu',
            children: [{
                label: '南京市',
                valueName: 'nanjing',
            }, {
                label: '苏州市',
                valueName: 'suzhou',
            }],
        }]
    },
    {
        name: 'description',
        label: '备注',
        type: 'textarea',
        span: 12,
        initalValue: ''
    },
    {
        name: 'upload',
        label: '附件上传',
        type: 'upload',
        hidden: false,
        uploadProps: {
            theme: 'image',
            action: "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
            tips: "单张图片文件上传（上传成功状态演示）",
            multiple: true,
            locale: {
                triggerUploadText: {
                    image: '请选择图片',
                },
            }
        }
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}
</script>

<template>
    <t-card>
        <ProForm loadingText="正在提交数据，请稍后..." labelAlign="top" :marginY="20" @submit="handleSubmit"
            :options="options as any">
            <template #form-username="{ form, rules }">
                <ProFormText :rules="rules" name="username" label="用户名" v-model="form.username" />
            </template>
        </ProForm>
    </t-card>
</template>

<style scoped></style>