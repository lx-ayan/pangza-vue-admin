<script setup lang='ts'>
import { ProForm, ProFormOption, ProFormRef } from 'tdesign-pro-component';
import { ref, computed } from 'vue';
import { userStore } from '@/store';
import { t } from '@/plugins';
import { LOGIN_REMEMBER, LOGIN_BTN, LOGIN_PASSWORD, LOGIN_PASSWORD_PLACEHOLDER, LOGIN_TIP, LOGIN_USERNAME, LOGIN_USERNAME_PLACEHOLDER, LOGIN_OR, LOGIN_WEIXIN, LOGIN_PHONE } from '@/common/lang';
import { useColor } from '@/hooks';
import ThemeButton from '@/components/ThemeButton/index.vue';
import ThemeDrawer from '@/components/ThemeDrawer/index.vue';

const { BG_COLOR, LOGIN_BG_COLOR, TEXT_COLOR } = useColor();

const lan = computed(() => {
    return {
        remember: t(LOGIN_REMEMBER),
        tip: t(LOGIN_TIP),
        loginBtn: t(LOGIN_BTN),
        weixin: t(LOGIN_WEIXIN),
        phone: t(LOGIN_PHONE),
        or: t(LOGIN_OR),
        username: t(LOGIN_USERNAME),
        usernamePlaceholder: t(LOGIN_USERNAME_PLACEHOLDER),
        password: t(LOGIN_PASSWORD),
        passwordPlaceholder: t(LOGIN_PASSWORD_PLACEHOLDER),
    }
})

const options: ProFormOption[] = [
    {
        name: 'username',
        label: lan.value.username,
        placeholder: lan.value.usernamePlaceholder,
        span: 12,
        formItemProps: {
            labelAlign: 'top'
        },
        rules: [
            { message: lan.value.usernamePlaceholder, required: true, trigger: 'blur' }
        ]
    },
    {
        name: 'password',
        label: lan.value.password,
        placeholder: lan.value.passwordPlaceholder,
        span: 12,
        formItemProps: {
            labelAlign: 'top'
        },
        textProps: {
            type: 'password'
        },
        rules: [
            { message: lan.value.passwordPlaceholder, required: true, trigger: 'blur' }
        ]
    }
]

const proFormRef = ref<ProFormRef>();

const useUserStore = userStore();

function handleSubmit(value: LoginRequest) {
    useUserStore.login(value);
}

function handleLoginClick() {
    proFormRef.value?.submit();
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
                    {{ lan.tip }}
                </div>
                <div class="w-[80%] mx-auto">
                    <ProForm :margin-y="20" :form-props="{ requiredMark: false }" ref="proFormRef" hide-footer
                        @submit="handleSubmit" :options="options"></ProForm>
                </div>

                <div class="w-[80%] mx-auto mb-2">
                    <t-checkbox>{{ lan.remember }}</t-checkbox>
                </div>

                <div class="w-[80%] mx-auto mt-4 mb-4">
                    <t-button @click="handleLoginClick" block>{{ lan.loginBtn }}</t-button>
                </div>

                <t-divider>{{ lan.or }}</t-divider>
                <div class="px-10 py-4 flex mb-5 justify-around">
                    <t-button variant="outline">
                        <template #icon>
                            <t-icon size="17" name="logo-wechat-stroke"></t-icon>
                        </template>
                        {{ lan.weixin }}
                    </t-button>
                    <t-button variant="outline">
                        <template #icon>
                            <t-icon size="17" name="mobile"></t-icon>
                        </template>
                        {{ lan.phone }}
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