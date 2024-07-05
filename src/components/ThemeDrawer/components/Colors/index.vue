<script setup lang='ts'>
import themeStore from '@/store/theme';
import { generateColorMap, insertThemeStylesheet } from '@/utils/color';
import { Color } from 'tvision-color';
import { ref, watch } from 'vue';
const useThemeStore = themeStore();

const colorList = [
    '#417ff9',
    '#67C23A',
    '#E6A23C',
    '#F56C6C',
    '#909399',
    '#101d37'
]

const currentColor = ref(useThemeStore.brandColor);

function handleClick(color: string) {
    currentColor.value = color;
}

function handleColorChange(color: string) {
    currentColor.value = color;
}

watch(currentColor, () => {
    const { colors: newPalette, primary: brandColorIndex } = Color.getColorGradations({
        colors: [currentColor.value],
        step: 10,
        remainInput: false, // 是否保留输入 不保留会矫正不合适的主题色
    })[0];
    const { theme } = useThemeStore;

    const colorMap = generateColorMap(currentColor.value, newPalette, theme as 'light' | 'dark', brandColorIndex);

    useThemeStore.changeBrandTheme(currentColor.value);
    insertThemeStylesheet(currentColor.value, colorMap, theme as 'light' | 'dark');
})

</script>

<template>
    <div class="flex items-center flex-wrap justify-between">
        <t-tooltip trigger="click">
            <template #content>
                <t-color-picker-panel  :on-change="handleColorChange" :color-modes="['monochrome']" format="HEX" />
            </template>
            <div :class="!colorList.includes(currentColor) ? 'out active' : 'out'">
                <div class="inner flex items-center justify-center">
                    <t-icon name="palette"></t-icon>
                </div>
            </div>
        </t-tooltip>

        <div :class="item === currentColor ? 'out active' : 'out'" @click="handleClick(item)" v-for="item in colorList"
            :key="item">
            <div :style="`background: ${item}`" class="inner">

            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.out {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 12px;
    cursor: pointer;

    .inner {
        width: 22px;
        height: 22px;
        border-radius: 50%;
    }
}

.out.active {
    border: 1px solid var(--td-brand-color);
}
</style>