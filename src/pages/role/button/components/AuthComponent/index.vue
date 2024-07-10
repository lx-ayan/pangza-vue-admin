<script setup lang='ts'>


</script>

<template>
    <t-card header="组件式权限" size="small" header-bordered :bordered="false">
        <div class="flex items-center p-2">
            <div class="mr-10">
                <span class="mr-3">有权限</span>
                <Auth permission="role_ADMIN">
                    <t-button>role_ADMIN</t-button>
                </Auth>
            </div>
            <div class="mr-10">
                <span class="mr-3">无权限-可以自定义状态</span>
                <Auth needShow permission="role_SUPERADMIN">
                    <template #default="{ hasAuth, permission }">
                        <t-button :disabled="hasAuth == false">{{ permission }}</t-button>
                    </template>
                </Auth>
            </div>

            <div>
                <span class="mr-3">无权限-直接隐藏</span>
                <Auth permission="role_SUPERADMIN">
                    <template #default="{ hasAuth }">
                        <t-button :disabled="hasAuth == false">admin</t-button>
                    </template>
                </Auth>
            </div>
        </div>
    </t-card>
</template>

<style lang='scss'></style>