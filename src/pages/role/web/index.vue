<script setup lang='ts'>
import userStore from '@/store/user';

const useUserStore = userStore();

function handleClick() {
    const username = useUserStore.user?.username == 'admin' ? 'user' : 'admin';
    useUserStore.doLogin({ username, password: '123456' });
    setTimeout(() => {
        window.location.reload();
    }, 400)
}

</script>

<template>
    <div>
        <t-card :bordered="false" size="small" header-bordered header="权限页面">
            <div class="p-2 flex items-center justify-between">
                <div>请注意【按钮权限】菜单，admin 用户可以访问，普通用户会 404 哦</div>
                <div>
                    <t-button @click="handleClick">
                        <template #icon>
                            <t-icon name="swap"></t-icon>
                        </template>
                        切换身份登录
                    </t-button>
                </div>
            </div>
        </t-card>
    </div>
</template>

<style lang='scss'></style>@/hooks/useDefer