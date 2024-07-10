<script setup lang='ts'>

</script>

<template>
    <t-card header="指令式权限" size="small" header-bordered :bordered="false">
        <div class="flex items-center p-2">
            <div class="mr-10">
                <span class="mr-3">有权限</span>
                <t-button v-permission="'role_ADMIN'">
                    role_ADMIN
                </t-button>
            </div>

            <div>
                <span class="mr-3">无权限</span>

                <t-button v-permission="'role_SUPERADMIN'">
                    role_SUPERADMIN
                </t-button>
            </div>
        </div>
    </t-card>
</template>

<style lang='scss'></style>