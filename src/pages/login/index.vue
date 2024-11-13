<script setup lang='tsx'>
import { ref } from 'vue';
import userStore from '@/store/user';
import useColor from '@/hooks/useColor';
import LoginSVG from '@/assets/svg/login.svg';
import LoginTwoSVG from '@/assets/svg/login2.svg';
import { ProFormOption } from 'tdesign-pro-component';
defineOptions({
    route: {
        name: 'login',
        path: '/login',
        meta: {
            guest: true
        }
    }
})

const useUserStore = userStore();

const { BG_COLOR, TEXT_COLOR } = useColor();

const options: ProFormOption[] = [
    {
        label: '',
        name: 'username',
        span: 12,
        placeholder: '请输入用户名',
        formItemProps: {
            labelWidth: 0
        },
        rules: [
            { required: true, message: '用户名不能为空' }
        ]
    },
    {
        label: '',
        placeholder: '请输入密码',
        name: 'password',
        span: 12,
        textProps: {
            type: 'password'
        },
        formItemProps: {
            labelWidth: 0
        },
        rules: [
            { required: true, message: '密码不能为空' },
        ]

    }
];

const formRef = ref<ProFormRef>()


function handleSubmit(data: LoginForm) {
    useUserStore.doLogin(data);
}

function handleLoginClick() {
    formRef.value?.submit();
}
</script>

<template>
    <div class="flex h-screen items-center">
        <div class="bg-[var(--td-brand-color)] w-[40vw] h-full flex items-center">
            <LoginSVG />

            <LoginTwoSVG />
        </div>
        <div class="flex-1  h-full" :class="`bg-[${BG_COLOR}]`">
            <div class="w-[35%] my-0 mx-auto pt-[30vh]">
                <div class="mb-5 text-2xl font-bold text-color">
                    欢迎登录 Pangza Admin
                </div>
                <ProForm hideFooter @submit="handleSubmit" ref="formRef" :requiredMark="false" :options="options">
                   
                </ProForm>
                <div class="flex items-center mt-1 mb-3 text-color text-sm">
                    <t-checkbox></t-checkbox> <span class="text-color"> 记住密码</span>
                </div>
                <div>
                    <t-button @click="handleLoginClick" block>登录</t-button>
                </div>
                <div class="flex items-center mt-3 text-sm">
                    <t-checkbox></t-checkbox> <span class="text-color">同意阅读</span> <router-link
                        class="ml-2 text-[var(--td-brand-color)]" to="/ogin">用户服务协议</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.login-bg {
    background-color: red;
    background: linear-gradient(to top right, #e8f0fb, #f0f4fd 40%);
}

.text-color {
    color: v-bind('TEXT_COLOR');
}
</style>