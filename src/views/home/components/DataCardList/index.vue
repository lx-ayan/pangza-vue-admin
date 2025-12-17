<script setup lang='ts'>
import DataCard from '@/components/business/DataCard/index.vue';
import useThemeStore from '@/store/themeStore';
const themeStore = useThemeStore();
</script>
<template>
    <Grid :gap="4">
        <GridItem :colSpan="6">
            <DataCard data="￥534,000" title="签约金额">
                <template #footer>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-600 dark:text-white/45 flex items-center">
                            <span>相对于上周</span>
                            <div class="mx-2">
                                <ColorIcon :size="14" name="arrow-up" width="20px" height="20px" color="#EA523E">
                                </ColorIcon>
                            </div>
                            <span class="text-[#EA523E]">12.5%</span>
                        </span>
                        <span>
                            <MyIcon name="chevron-right" :size="14" color="#999999"></MyIcon>
                        </span>
                    </div>
                </template>

                <template #image>
                    <div class="bg-[#F2F3FF] w-16 h-16 rounded-full flex items-center justify-center">
                        <ColorIcon :size="27" name="JapaneseYen" width="64px" height="64px"
                            :color="themeStore.brandColor">
                        </ColorIcon>
                    </div>
                </template>
            </DataCard>
        </GridItem>
        <GridItem :colSpan="6">
            <DataCard data="300" title="客户数量（个）">
                <template #footer>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-[#999999] flex items-center">
                            <span>相对于上季度</span>
                            <div class="mx-2">
                                <ColorIcon :size="14" name="arrow-up" width="20px" height="20px" color="#EA523E">
                                </ColorIcon>
                            </div>
                            <span class="text-[#EA523E]">12.5%</span>
                        </span>
                        <span>
                            <MyIcon name="chevron-right" :size="14" color="#999999"></MyIcon>
                        </span>
                    </div>
                </template>

                <template #image>
                    <ColorIcon :size="27" name="user" width="64px" height="64px" :color="themeStore.brandColor">
                    </ColorIcon>
                </template>
            </DataCard>
        </GridItem>
        <GridItem :colSpan="6">
            <DataCard data="1,200" title="商机数量（个）">
                <template #footer>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-[#999999] flex items-center">
                            <span>自从上周以来</span>
                            <div class="mx-2">
                                <ColorIcon :size="14" name="arrow-down" width="20px" height="20px" color="#20A867">
                                </ColorIcon>
                            </div>
                            <span class="text-[#20A867]">12.5%</span>
                        </span>
                        <span>
                            <MyIcon name="chevron-right" :size="14" color="#999999"></MyIcon>
                        </span>
                    </div>
                </template>

                <template #image>
                    <div class="bg-[#F2F3FF] w-16 h-16 rounded-full flex items-center justify-center">
                        <ColorIcon :size="27" name="ChartNoAxesColumn" width="64px" height="64px"
                            :color="themeStore.brandColor">
                        </ColorIcon>
                    </div>
                </template>
            </DataCard>
        </GridItem>
        <GridItem :colSpan="6">
            <DataCard data="￥1,500,00" title="年度目标">
                <template #footer>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-[#999999] flex items-center">
                            继续努力，一定会完成
                        </span>
                        <div class="mx-5 flex-1">

                        </div>
                    </div>
                </template>

                <template #image>
                    <div>
                        <t-progress size="small" theme="circle" :percentage="(Math.floor((534000 / 1500000) * 100))" />
                    </div>
                </template>
            </DataCard>
        </GridItem>
    </Grid>
</template>