import { themeStore } from "@/store";
import { computed } from "vue";

export function useColor() {
    const useThemeStore = themeStore();

    const BG_COLOR = computed(() => useThemeStore.theme === 'dark' ? '#181818' : '#f6f8fb');
    const PRO_TABLE_HEADER_COLOR = computed(() => useThemeStore.theme === 'light' ? '#F6F6F6' : '#333');
    const TEXT_COLOR = computed(() => useThemeStore.theme === 'light' ? '#191919' : '#F6F6F6');
    const LOGIN_BG_COLOR = computed(() => useThemeStore.theme === 'dark' ? '#333' : '#fff');

    return {
        BG_COLOR,
        PRO_TABLE_HEADER_COLOR,
        useThemeStore,
        TEXT_COLOR,
        LOGIN_BG_COLOR
    }
}
