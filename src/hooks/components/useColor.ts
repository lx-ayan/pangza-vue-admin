import useThemeStore from "@/store/themeStore";
import { getCssVar } from "@/utils/core/css";
import { computed } from "vue";

function useColor() {
    const themeStore = useThemeStore();
    const layoutBackgroundColor = computed(() => { return themeStore.isDark ? '#181818' : '#fafbfc' });
    const cardBackgroundColor = computed(() => { return themeStore.isDark ? '#1C1C1C' : '#FBFCFD' });
    const borderColor = computed(() => themeStore.isDark ? getCssVar('--td-component-border') : getCssVar('--td-component-border'));
    const textColor = computed(() => themeStore.isDark ? '#C3C3C3' : '#9BA2B8');
    const cardBgColor = computed(() => themeStore.isDark ? '#242424' : '#FFF');

    function initTheme() {
        themeStore.initTheme();
    }

    return {
        layoutBackgroundColor,
        cardBackgroundColor,
        borderColor,
        textColor,
        cardBgColor,
        initTheme
    }
}

export default useColor;