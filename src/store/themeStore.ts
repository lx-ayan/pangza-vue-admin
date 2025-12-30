import { setPiniaPersistedStateConfig } from "@/config/pinia.config";
import { generateColorMap, insertThemeStylesheet, setOhterColor } from "@/utils/core/css";
import { defineStore } from "pinia";
import { Color } from "tvision-color";
import { computed, ref } from "vue";

type RouterAnimationType = 'fade' | 'translate' | 'zoom' | 'flip' | 'rotate';

const useThemeStore = defineStore('theme', () => {

    const isDark = ref<string | boolean>(false);

    const layout = ref<'1' | '2'>('1');

    const brandColor = ref('#4C6FFF');

    const successColor = ref('#20A867');

    const isCollapsed = ref(false);

    const menuTheme = ref<'light' | 'dark'>('light');

    const theme = computed(() => isDark.value ? 'dark' : 'light');

    const routerAnimateion = ref<RouterAnimationType>('translate');

    const showTab = ref(true);

    const showCollaspedButton = ref(true);


    function setDark(state: string | boolean) {
        isDark.value = state;
        if (typeof state === 'string') {
            state = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        document.documentElement.setAttribute('theme-mode', state ? 'dark' : 'light');
    }

    function setLayout(state: '1' | '2') {
        layout.value = state;
    }

    function setBrandColor(color: string) {
        const colorMap = getColorMap(color);
        insertThemeStylesheet(color, colorMap, theme.value);
        document.documentElement.setAttribute('theme-color', color);
        brandColor.value = color;
        setSuccessColor(successColor.value)
    }

    /**
     * 这里可拓展其他按钮主题颜色，如警告按钮，危险按钮，用户可自己配置。
     */
    function setSuccessColor(color: string) {
        const colorMap = getColorMap(color);
        setOhterColor(brandColor.value, colorMap, theme.value, 'success');
    }

    function initTheme() {
        setDark(isDark.value);
        setLayout(layout.value);
        setBrandColor(brandColor.value);
    }

    function getColorMap(color: string) {
        const { colors, primary } = Color.getColorGradations({
            colors: [color],
            remainInput: true // 是否保留输入 不保留会矫正不合适的主题色
        })[0];
        return generateColorMap(
            color,
            colors,
            theme.value,
            primary
        );
    }

    function setCollapsed(state: boolean) {
        isCollapsed.value = state;
    }

    function setRouterAnimation(state: RouterAnimationType) {
        routerAnimateion.value = state;
    }

    function setTab(state: boolean) {
        showTab.value = state;
    }

    function setMenuTheme(state: 'light' | 'dark') {
        menuTheme.value = state;
    }

    function setShowCollapsedButton(state: boolean) {
        showCollaspedButton.value = state;
    }

    return {
        isDark,
        layout,
        brandColor,
        isCollapsed,
        routerAnimateion,
        showTab,
        menuTheme,
        showCollaspedButton,
        setDark,
        setLayout,
        setBrandColor,
        initTheme,
        setCollapsed,
        setRouterAnimation,
        setTab,
        setMenuTheme,
        setShowCollapsedButton
    }

}, {
    persist: setPiniaPersistedStateConfig('themeStore')
});

export default useThemeStore;