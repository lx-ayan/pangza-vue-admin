<script setup lang='tsx'>
import LoginBG from '@/assets/image/work.jpg';
import { ProFormOption, ProFormRef } from 'procomponent-tdesign-vue';
import { login } from '@/api/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessagePlugin } from 'tdesign-vue-next';
import storeUtil from '@/utils/store';
import userStore from '@/store/user';
import { StoreEnum } from '@/common/enums';

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
        col: 12,
        placeholder: '请输入用户名',
        inputAttrs: {
            //@ts-ignore
            prefixIcon: () => (<t-icon size="18" name="user"></t-icon>),
            size: 'large'
        },
        rules: [
            { required: true, message: '用户名不能为空' }
        ]
    },
    {
        label: '',
        name: 'password',
        col: 12,
        type: 'password',
        inputAttrs: {
            placeholder: '请输入密码',
            //@ts-ignore
            prefixIcon: () => <t-icon size="18" name="lock-on"></t-icon>,
            size: 'large',
        },
        rules: [
            { required: true, message: '密码不能为空' },
        ]

    }
];

const router = useRouter();

const formRef = ref<ProFormRef>()

function request() {
    return Promise.resolve(null);
}

function handleSubmit(data: LoginForm) {
    login(data).then(res => {
        if (res) {
            storeUtil.set(StoreEnum.TOKEN, res.token, 7);
            useUserStore.setUser(res);
            router.push('/home');
        }
    }).catch(e => {
        MessagePlugin.error(e);
    })
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
                    <ProForm @submit="handleSubmit" ref="formRef" :requiredMark="false" :request="request"
                        :options="options">
                        <template #footer></template>
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