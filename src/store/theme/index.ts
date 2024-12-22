import { piniaSotrageConfig } from "@/config";
import { setGlobalLanguage } from "@/plugins";
import { getBrowserLang } from "@/utils";
import { generateColorMap, insertThemeStylesheet } from "@/utils/color";
import { defineStore } from "pinia";
import { Color } from "tvision-color";

export const themeStore = defineStore('theme', {
    state: (): ThemeState => ({
        lang: 'zh',
        animate: true,
        animateName: 'translate',
        theme: 'light',
        tagView: true,
        brandColor: '#0052d9',
        screen: true,
        gray: false,
        logo: true,
        collapsed: false,
        collapsedBtn: true
    }),
    getters: {
        getLang(): string {
            return this.lang;
        }
    },
    actions: {
        setLang(lang: LangType) {
            this.lang = lang;
        },
        setAnimate(animate: boolean) {
            this.animate = animate;
        },
        initTheme() {
            const language = this.getLang ?? getBrowserLang();
            this.setLang(language as unknown as LangType);
            setGlobalLanguage(language as unknown as LangType);
            this.initThemeMode();
            this.changeBrandTheme(this.brandColor || '#0052d9');
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
                theme!,
                primary
            );
            insertThemeStylesheet(color, colorMap, theme!);
            document.documentElement.setAttribute('theme-color', color);
            this.brandColor = color;
        },
        setTheme(theme: 'dark' | 'light', e: MouseEvent) {
            this.theme = theme;
            // 设置暗色模式
            const transition = document.startViewTransition(() => {
                this.initThemeMode();
            });

            transition.ready.then(() => {
                const { clientX, clientY } = e;
                const radius = Math.hypot(Math.max(clientX, innerWidth - clientX), Math.max(clientY, innerWidth - clientY));
                document.documentElement.animate(
                    {
                        clipPath: [`circle(0% at ${clientX}px ${clientY}px)`, `circle(${radius}px at ${clientX}px ${clientY}px)`]
                    },
                    {
                        duration: 300,
                        pseudoElement: '::view-transition-new(root)'
                    }
                )
            })

        },
        initThemeMode() {
            if (this.theme === 'dark') {
                document.documentElement.setAttribute('theme-mode', 'dark');
            } else {
                // 重置为浅色模式
                document.documentElement.removeAttribute('theme-mode');
            }
        },
        setCollapsed(value: boolean) {
            this.collapsed = value;
        }
    },
    persist: piniaSotrageConfig('theme')
});