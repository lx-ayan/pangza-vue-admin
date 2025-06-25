<script setup lang='ts'>
import { ProForm, ProFormOption, ProFormRef } from 'tdesign-pro-component';
import { ref } from 'vue';
import { userStore } from '@/store';
import { useColor } from '@/hooks';
import ThemeButton from '@/components/ThemeButton/index.vue';
import ThemeDrawer from '@/components/ThemeDrawer/index.vue';

const { BG_COLOR, LOGIN_BG_COLOR, TEXT_COLOR } = useColor();

const options: ProFormOption[] = [
{
        name: 'username',
        label: '用户名',
        textProps: {
            placeholder: '请输入 user 或 admin'
        },
        rules: [
            {
                required: true, message: '请输入用户名', trigger: 'blur'
            }
        ],
        span: 12,
        formItemProps: {
            labelAlign: 'top'
        }
    },
    {
        name: 'password',
        label: '密码',
        placeholder: '请输入密码',
        span: 12,
        formItemProps: {
            labelAlign: 'top'
        },
        textProps: {
            type: 'password'
        },
        rules: [
            { message: '请输入密码', required: true, trigger: 'blur' }
        ]
    }
]

const proFormRef = ref<ProFormRef>();

const useUserStore = userStore();

async function handleSubmit(value: LoginRequest) {
    useUserStore.login(value);
    return true;
}

function handleLoginClick() {
    proFormRef.value?.submit();
    return true
}

</script>

<template>
    <div class="login-container">
        <div class="login-container-inner">
            <div class="text-center mb-4 flex items-center">
                <t-icon size="21" color="var(--td-brand-color)" name="desktop"></t-icon>
                <span class="ml-2 text-xl">Pangza Vue Admin</span>
            </div>
            <div class="login-card">
                <div class="mb-6 text-center mt-6 font-bold text-2xl">
                    用户名密码登录
                </div>
                <div class="w-[80%] mx-auto">
                    <ProForm :margin-y="20" :form-props="{ requiredMark: false }" ref="proFormRef" hide-footer
                        @submit="handleSubmit" :options="options"></ProForm>
                </div>

                <div class="w-[80%] mx-auto mb-2">
                    <t-checkbox>保存用户名密码</t-checkbox>
                </div>

                <div class="w-[80%] mx-auto mt-4 mb-4">
                    <t-button @click="handleLoginClick" block>登录</t-button>
                </div>

                <t-divider>或</t-divider>
                <div class="px-10 py-4 flex mb-5 justify-around">
                    <t-button variant="outline">
                        <template #icon>
                            <t-icon size="17" name="logo-wechat-stroke"></t-icon>
                        </template>
                        微信登录
                    </t-button>
                    <t-button variant="outline">
                        <template #icon>
                            <t-icon size="17" name="mobile"></t-icon>
                        </template>
                        手机登录
                    </t-button>
                </div>
            </div>
        </div>

        <div class=" absolute top-3 right-3 flex items-center">
            <ThemeButton />
            <ThemeDrawer />
        </div>
    </div>
</template>

<style lang='scss'>
.login-container {
    color: v-bind('TEXT_COLOR');
    background-color: v-bind('BG_COLOR');
    @apply h-screen flex relative flex-col justify-center relative;

    &-inner {
        justify-content: center;
        @apply flex flex-col items-center;
    }
}

.login-card {
    transition: transform .3s ease-out, opacity .3s ease-out, box-shadow .3s ease-out;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: var(--tblr-card-height);
    color: var(--tblr-body-color);
    word-wrap: break-word;
    background-color: v-bind('LOGIN_BG_COLOR');
    background-clip: border-box;
    border: 1px solid rgba(4, 32, 69, 0.1);
    border-radius: 4px;
    padding: 1rem 1.25rem;

}
</style>