<script setup lang='ts'>
import usePermission from '@/hooks/usePermission';

const adminHook = usePermission('role_ADMIN');
const suerAdminHook = usePermission('role_SUPERADMIN');

</script>

<template>
    <t-card header="hook 式权限" size="small" header-bordered :bordered="false">
        <div class="flex items-center p-2">
            <div class="mr-10">
                <span class="mr-3">有权限</span>
                <t-button v-if="adminHook">
                    role_ADMIN
                </t-button>
            </div>

            <div>
                <span class="mr-3">无权限</span>

                <t-button v-if="suerAdminHook">
                    role_SUPERADMIN
                </t-button>
            </div>
        </div>
    </t-card>
</template>

<style lang='scss'></style>