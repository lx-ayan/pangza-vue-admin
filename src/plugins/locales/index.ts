import { App } from "vue";
import { createI18n } from 'vue-i18n';
import zh from './langs/zh';
import en from './langs/en';
import { getBrowserLang } from "@/utils";

const i18n = createI18n({
    allowComposition: true,
    legacy: false,
    locale: getBrowserLang(),
    messages: {
        zh,
        en
    }
});

export const t = (key: string) => i18n.global.t(key);

export const setGlobalLanguage = (lang: LangType) => i18n.global.locale.value = lang;

export function setupi18n(app: App) {
    app.use(i18n);
}