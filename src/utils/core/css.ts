import Color from "color";
import StringUtil from "../clz/StringUtil";
import useThemeStore from "@/store/themeStore";
import { Color as TColor } from 'tvision-color';


interface ColorOption {
    count?: number;
    color?: string;
}

export function createNameSpace(name: string) {

    let prefixName = name;

    function b(block: string = '') {
        return StringUtil.buildString(prefixName, block ? { split: '-', text: block } : '').trim();
    }

    function e(element: string = '') {
        return StringUtil.buildString(prefixName, element ? { split: '__', text: element } : '').trim();
    }

    function m(modifier: string = '') {
        return StringUtil.buildString(prefixName, modifier ? { split: '--', text: modifier } : '').trim();
    }

    function be(block: string = '', element: string = '') {
        return StringUtil.buildString(prefixName, block ? { split: '-', text: block } : '', element ? { split: '__', text: element } : '').trim();
    }

    function bm(block: string = '', modifier: string = '') {
        return StringUtil.buildString(prefixName, block ? { split: '-', text: block } : '', modifier ? { split: '__', text: modifier } : '').trim();
    }

    function em(element: string = '', modifier: string = '') {
        return StringUtil.buildString(prefixName, element ? { split: '-', text: element } : '', modifier ? { split: '__', text: modifier } : '').trim();
    }

    function bem(block: string = '', element: string = '', modifier: string = '') {
        return StringUtil.buildString(prefixName, block ? { split: '-', text: block } : '', element ? { split: '-', text: element } : '', modifier ? { split: '__', text: modifier } : '').trim();
    }

    function getName() {
        return prefixName;
    }

    return {
        b,
        e,
        m,
        bm,
        be,
        em,
        bem,
        getName
    }
}

export function getCssVar(name: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(name)
}

export function mixColor(baseColor: string, ...colors: string[]) {
    let mixColor = Color(baseColor);
    colors.forEach(item => {
        mixColor = mixColor.mix(Color(item));
    })
    return mixColor.string();
}

export function mixColorByOption(baseColor: string, option: ColorOption = {}) {
    const themeStore = useThemeStore();
    const { count = 1, color = themeStore.isDark ? '#333' : '#FFF' } = option;

    let mixColor = Color(baseColor);

    for (let i = 0; i < count; i++) {
        mixColor = mixColor.mix(Color(color))
    }

    return mixColor.string();
}

export function insertThemeStylesheet(
    theme: string,
    colorMap: any,
    mode: 'light' | 'dark',
) {
    const isDarkMode = mode === 'dark';
    const root = !isDarkMode
        ? `:root[theme-color='${theme}']`
        : `:root[theme-color='${theme}'][theme-mode='dark']`;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `${root}{
      --td-brand-color: ${colorMap['--td-brand-color']};
      --td-brand-color-1: ${colorMap['--td-brand-color-1']};
      --td-brand-color-2: ${colorMap['--td-brand-color-2']};
      --td-brand-color-3: ${colorMap['--td-brand-color-3']};
      --td-brand-color-4: ${colorMap['--td-brand-color-4']};
      --td-brand-color-5: ${colorMap['--td-brand-color-5']};
      --td-brand-color-6: ${colorMap['--td-brand-color-6']};
      --td-brand-color-7: ${colorMap['--td-brand-color-7']};
      --td-brand-color-8: ${colorMap['--td-brand-color-8']};
      --td-brand-color-9: ${colorMap['--td-brand-color-9']};
      --td-brand-color-10: ${colorMap['--td-brand-color-10']};
    }`;

    document.head.appendChild(styleSheet);
}

export function setOhterColor(brandColor: string, colorMap: any, mode: 'light' | 'dark', type: 'success' | 'warning' | 'error') {
    const isDarkMode = mode === 'dark';
    const root = !isDarkMode
        ? `:root[theme-color='${brandColor}']`
        : `:root[theme-color='${brandColor}'][theme-mode='dark']`;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `${root}{
      --td-${type}-color: ${colorMap['--td-brand-color']};
      --td-${type}-color-1: ${colorMap['--td-brand-color-1']};
      --td-${type}-color-2: ${colorMap['--td-brand-color-2']};
      --td-${type}-color-3: ${colorMap['--td-brand-color-3']};
      --td-${type}-color-4: ${colorMap['--td-brand-color-4']};
      --td-${type}-color-5: ${colorMap['--td-brand-color-5']};
      --td-${type}-color-6: ${colorMap['--td-brand-color-6']};
      --td-${type}-color-7: ${colorMap['--td-brand-color-7']};
      --td-${type}-color-8: ${colorMap['--td-brand-color-8']};
      --td-${type}-color-9: ${colorMap['--td-brand-color-9']};
      --td-${type}-color-10: ${colorMap['--td-brand-color-10']};
    }`;

    document.head.appendChild(styleSheet);
}

/**
 * 根据当前主题色、模式等情景 计算最后生成的色阶
 */
export function generateColorMap(
    theme: string,
    colorPalette: Array<string>,
    mode: 'light' | 'dark',
    brandColorIdx: number
) {
    const isDarkMode = mode === 'dark';

    if (isDarkMode) {
        // eslint-disable-next-line no-use-before-define
        colorPalette.reverse().map((color) => {
            const [h, s, l] = TColor.colorTransform(color, 'hex', 'hsl');
            return TColor.colorTransform([h, Number(s) - 4, l], 'hsl', 'hex');
        });
        brandColorIdx = 5;
        colorPalette[0] = `${colorPalette[brandColorIdx]}20`;
    }

    const colorMap = {
        '--td-brand-color': colorPalette[brandColorIdx], // 主题色
        '--td-brand-color-1': colorPalette[0], // light
        '--td-brand-color-2': colorPalette[1], // focus
        '--td-brand-color-3': colorPalette[2], // disabled
        '--td-brand-color-4': colorPalette[3],
        '--td-brand-color-5': colorPalette[4],
        '--td-brand-color-6': colorPalette[5],
        '--td-brand-color-7':
            brandColorIdx > 0 ? colorPalette[brandColorIdx - 1] : theme, // hover
        '--td-brand-color-8': colorPalette[brandColorIdx], // 主题色
        '--td-brand-color-9':
            brandColorIdx > 8 ? theme : colorPalette[brandColorIdx + 1], // click
        '--td-brand-color-10': colorPalette[9]
    };
    return colorMap;
}

export function rgb2Hex(color: string) {
    return Color(color).hex();
}

export function color2Arr(color: string) {
    return Color(color).array();
}