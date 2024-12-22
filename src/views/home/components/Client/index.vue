<script setup lang='ts'>

</script>

<template>
    <div>
        <div class="mb-7">
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <div class="mr-2">
                        <t-avatar image="https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_0ff39d393338f349964dabc7179a1eb8~c5_300x300.jpeg?from=2956013662" />
                    </div>
                    <div>
                        路人甲
                    </div>
                </div>

                <div>
                    82.76%
                </div>
            </div>
            <div>
                <t-progress :percentage="82.76" :label="false" />
            </div>
        </div>
        <div class="mb-7">
            <div class="flex items-center justify-between mb-1">
                <div class="flex items-center">
                    <div class="mr-2">
                        <t-avatar image="https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_oED5AEwA2QWVKFIAJDWfCEexV2AOC9ghonICAA~c5_300x300.jpeg?from=2956013662" />
                    </div>
                    <div>
                        路人乙
                    </div>
                </div>

                <div>
                    62.76%
                </div>
            </div>
            <div>
                <t-progress :percentage="62.76" :label="false" />
            </div>
        </div>
    </div>
</template>

<style lang='scss'></style>