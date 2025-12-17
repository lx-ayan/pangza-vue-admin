<script setup lang="ts">
import useThemeStore from '@/store/themeStore';
import { rgb2Hex } from '@/utils/core/css';
import { ROUTER_ANIMATION_DATA } from '@/utils/data/constant';
import { ref } from 'vue';
const themeStore = useThemeStore();
const visible = ref(false);

const BRAND_COLOR = ['#3355ff', '#18A058', '#F0A020', '#8A2BE2', '#101d37'];


function handleClick(key: string, state: any) {
    if (key === 'dark') {
        themeStore.setDark(state);
    }

    if (key === 'layout') {
        themeStore.setLayout(state);
    }

    if (key === 'brand') {
        themeStore.setBrandColor(state);
    }

    if (key === 'menu') {
        themeStore.setMenuTheme(state);
    }
}

function handleChange(color) {
    const resultColor = rgb2Hex(color);
    themeStore.setBrandColor(resultColor);
}
</script>


<template>
    <div>
        <t-drawer size="25%" header="主题设置" v-model:visible="visible">
            <div class="mb-2">
                系统主题
            </div>
            <Grid :gap="4">
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('dark', false)" class="paint-setting__system bg-[#f7f8fa]"
                        :class="{ 'paint-setting__system--active': themeStore.isDark === false }">
                        <MyIcon color="#000" name="LucideSunMedium" />
                    </div>
                </GridItem>
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('dark', true)" class="paint-setting__system bg-[#101d37]"
                        :class="{ 'paint-setting__system--active': themeStore.isDark === true }">
                        <MyIcon color="#FFF" name="Moon" />
                    </div>
                </GridItem>
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('dark', 'window')" class="paint-setting__system bg-[#f7f8fa]"
                        :class="{ 'paint-setting__system--active': themeStore.isDark === 'window' }">
                        <MyIcon color="#000" name="Chrome" />
                    </div>
                </GridItem>
            </Grid>

            <div class="mt-8 mb-2">
                布局设置
            </div>
            <Grid :gap="4">
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('layout', '1')"
                        class="paint-setting__system flex-col shadow-sm bg-[#f7f8fa]"
                        :class="{ 'paint-setting__system--active': themeStore.layout === '1' }">
                        <div class="h-[20px] w-full bg-white">
                        </div>
                        <div class="w-full">
                            <div class="h-[60px] bg-[#101d37] w-[20px]">

                            </div>
                        </div>
                    </div>
                </GridItem>
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('layout', '2')" class="paint-setting__system shadow-sm bg-[#f7f8fa]"
                        :class="{ 'paint-setting__system--active': themeStore.layout === '2' }">
                        <div class="h-full bg-[#101d37] w-[20px]">

                        </div>

                        <div class="h-full flex-1">
                            <div class="h-[20px] bg-white">
                            </div>
                        </div>
                    </div>
                </GridItem>
            </Grid>

            <div class="mt-8 mb-2">
                主题颜色
            </div>

            <Grid :gap="0">
                <GridItem :colSpan="3" v-for="color in BRAND_COLOR" :key="color">
                    <div @click="() => handleClick('brand', color)"
                        class=" w-10 flex items-center justify-center cursor-pointer h-10 rounded-full"
                        :class="{ 'brand-color--active': themeStore.brandColor.toLocaleLowerCase() === color.toLocaleLowerCase() }">
                        <div :style="{ background: color }" class="h-6 w-6 rounded-full">
                        </div>
                    </div>
                </GridItem>

                <GridItem class="pt-1" :colSpan="4">
                    <t-color-picker :value="themeStore.brandColor" :colorModes="['monochrome ']"
                        @change="handleChange" />
                </GridItem>
            </Grid>

            <div class=" mt-8 mb-2">
                菜单主题
            </div>

            <Grid :gap="4">
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('menu', 'light')" class="paint-setting__system bg-[#f7f8fa]"
                        :class="{ 'paint-setting__system--active': themeStore.isDark === false }">
                        <MyIcon color="#000" name="LucideSunMedium" />
                    </div>
                </GridItem>
                <GridItem :colSpan="8">
                    <div @click="() => handleClick('menu', 'dark')" class="paint-setting__system bg-[#101d37]"
                        :class="{ 'paint-setting__system--active': themeStore.isDark === true }">
                        <MyIcon color="#FFF" name="Moon" />
                    </div>
                </GridItem>
            </Grid>

            <div class="mt-8 mb-5">
                其他配置
            </div>

            <div class="flex items-center justify-between">
                <span>
                    过渡效果
                </span>

                <t-select style="width: 100px;" @change="(v) => themeStore.setRouterAnimation(v)"
                    :default-value="themeStore.routerAnimateion" :options="ROUTER_ANIMATION_DATA">

                </t-select>
            </div>

            <div class="my-4 flex items-center justify-between">
                <span>标签页</span>
                <t-switch :default-value="themeStore.showTab" @change="themeStore.setTab"></t-switch>
            </div>

            <div class="my-4 flex items-center justify-between">
                <span>折叠按钮</span>
                <t-switch :default-value="themeStore.showCollaspedButton"
                    @change="themeStore.setShowCollapsedButton"></t-switch>
            </div>
        </t-drawer>
        <t-button size="large" shape="circle" @click="visible = true" variant="text">
            <template #icon>
                <MyIcon :strokeWidth="1.7" :size="18" name="LucidePaintBucket" />
            </template>
        </t-button>
    </div>
</template>

<style lang="scss">
.paint-setting__system {
    @apply h-[80px] flex items-center justify-center rounded cursor-pointer;

    &--active {
        @apply border-2 border-[var(--td-brand-color)];
    }
}

.brand-color--active {
    border: 1px solid var(--td-brand-color);
}
</style>