<script setup lang='tsx'>
import { ProFormOption } from 'tdesign-pro-component/dist/types/components/ProForm';
import { ref } from 'vue';
import userStore from '@/store/user';

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

const options: ProFormOption[] = [
    {
        label: '',
        name: 'username',

    }
    // {
    //     label: '',
    //     name: 'username',
    //     col: 12,
    //     placeholder: '请输入用户名',
    //     inputAttrs: {
    //         //@ts-ignore
    //         prefixIcon: () => (<t-icon size="18" name="user"></t-icon>),
    //         size: 'large'
    //     },
    //     rules: [
    //         { required: true, message: '用户名不能为空' }
    //     ]
    // },
    // {
    //     label: '',
    //     name: 'password',
    //     col: 12,
    //     type: 'password',
    //     inputAttrs: {
    //         placeholder: '请输入密码',
    //         //@ts-ignore
    //         prefixIcon: () => <t-icon size="18" name="lock-on"></t-icon>,
    //         size: 'large',
    //     },
    //     rules: [
    //         { required: true, message: '密码不能为空' },
    //     ]

    // }
];

const formRef = ref<ProFormRef>()

function request() {
    return Promise.resolve(null);
}

function handleSubmit(data: LoginForm) {
    useUserStore.doLogin(data);
}

function handleLoginClick() {
    formRef.value?.submit();
}
</script>

<template>
    <div class="flex h-screen justify-center items-center bg-slate-300 px-5 md:px-0">
        <div class="w-[720px] bg-white -translate-y-16 md:grid grid-cols-2 rounded-sm shadow-sm overflow-hidden">
            <div class="p-6 pt-10">
                <h2 class="text-gray-700 text-xl font-bold text-center mb-10">
                    用户名密码登录
                </h2>
                <div>
                    <ProForm :request="request"
                        :options="options">
                    </ProForm>
                    <div class="mt-8">
                        <t-button @click="handleLoginClick" size="large" block>登录</t-button>
                    </div>
                </div>
            </div>
            <div class="hidden md:block">
                <img :src="LoginBG" class="h-96 w-full object-cover" alt="" />
            </div>
        </div>
    </div>
</template>

<style>
.login-bg {
    background-color: red;
    background: linear-gradient(to top right, #e8f0fb, #f0f4fd 40%);
}
</style>