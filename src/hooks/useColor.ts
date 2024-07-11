import themeStore from "@/store/theme";
import { computed } from "vue";

function useColor() {
    const useThemeStore = themeStore();

    const BG_COLOR = computed(() => useThemeStore.theme === 'dark' ? '#181818' : '#f5f5f5');
    const PRO_TABLE_HEADER_COLOR = computed(() => useThemeStore.theme === 'light' ? '#F6F6F6' : '#333');
    const TEXT_COLOR = computed(() => useThemeStore.theme === 'light' ? '#191919' : '#F6F6F6');

    return {
        BG_COLOR,
        PRO_TABLE_HEADER_COLOR,
        useThemeStore,
        TEXT_COLOR
    }
}

export default useColor;