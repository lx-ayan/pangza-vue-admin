<script setup lang='ts'>

</script>

<template>
    <div>
        <t-card header="指令权限">
            <div v-permission="['ROLE_ADMIN']" class="mb-3">
                <t-card>
                    Hello Admin
                </t-card>
            </div>

            <div>
                <t-card>
                    Hello User
                </t-card>
            </div>
        </t-card>

        <div class="mt-4">
            <t-card header="组件指令">
                <Auth :permission="['ROLE_ADMIN']">
                    <div class="mb-3">
                        <t-card>
                            Hello Admin
                        </t-card>
                    </div>
                </Auth>

                <div>
                    <t-card>
                        Hello User
                    </t-card>
                </div>
            </t-card>
        </div>
    </div>
</template>

<style lang='scss'></style>