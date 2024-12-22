import { themeStore } from "@/store";

function useTheme() {
    const useThemeStore = themeStore();
    function initTheme() {
        useThemeStore.initTheme();
    }

    return [initTheme];
}

export default useTheme;