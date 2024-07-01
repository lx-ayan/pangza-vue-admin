import themeStore from "@/store/theme";

function useTheme() {
    const useThemeStore = themeStore();
    function initTheme() {
        useThemeStore.changeBrandTheme(useThemeStore.brandColor || '#0052d9');
        document.documentElement.setAttribute('theme-mode', useThemeStore.theme);
    }

    return [initTheme];
}

export default useTheme;