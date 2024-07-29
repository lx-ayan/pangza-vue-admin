import piniaPersistedState from "@/config/pinia";
import useTheme from "@/hooks/useTheme";
import { generateColorMap, insertThemeStylesheet } from "@/utils/color";
import { defineStore } from "pinia";
import { Color } from "tvision-color";

export type LayoutOption = 'one' | 'two' | 'three';

export type ThemeMode = 'light' | 'dark';

export type MenuType = 'normal' | 'group';

export type MenuExpandType = 'normal' | 'popup';

export type RouteAnimateName = 'fade' | 'translate' | 'scale';

export interface ThemeState {
    brandColor: string;
    layout: LayoutOption;
    theme: ThemeMode;
    breads: boolean;
    collapsed: boolean;
    tagView: boolean;
    isCollapsed: boolean;
    breadsTo: boolean;
    breadsChildren: boolean;
    nprogress: boolean;
    menu: boolean;
    screen: boolean;
    header: boolean;
    logo: boolean;
    gray: boolean;
    menuType: MenuType;
    menuExpandType: MenuExpandType;
    expandMutex: boolean;
    loading: boolean;
    animate: boolean;
    animateName: RouteAnimateName
}

const themeStore = defineStore('theme', {
    state: (): ThemeState => ({
        brandColor: '#1867c0',
        layout: 'one',
        theme: 'light',
        isCollapsed: false,
        tagView: true,
        breads: true,
        collapsed: true,
        breadsTo: true,
        breadsChildren: true,
        nprogress: true,
        menu: true,
        screen: true,
        header: true,
        logo: true,
        gray: false,
        menuType: 'normal',
        menuExpandType: 'normal',
        expandMutex: false,
        loading: true,
        animate: true,
        animateName: 'fade'
    }),
    actions: {
        setLayout(data: LayoutOption) {
            this.layout = data;
        },
        changeBrandTheme(color: string) {
            const { colors, primary } = Color.getColorGradations({
                colors: [color],
                remainInput: false // 是否保留输入 不保留会矫正不合适的主题色
            })[0];
            const { theme } = this;
            const colorMap = generateColorMap(
                color,
                colors,
                theme,
                primary
            );
            insertThemeStylesheet(color, colorMap, theme);
            document.documentElement.setAttribute('theme-color', color);
            this.brandColor = color;
        },
        setThemeByKey<K extends keyof ThemeState, V = ThemeState[K]>(key: K, value: V) {
            //@ts-ignore
            this[key] = value;
        },
        setTheme(theme: ThemeMode) {
            this.theme = theme;
            const [initTheme] = useTheme();
            initTheme();
        }
    },
    persist: piniaPersistedState('themeStore')
});

export default themeStore;