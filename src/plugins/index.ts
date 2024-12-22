import { setupPinia } from './pinia';
import { setupTailwindcss } from './tailwindcss';
import { setupTdesign } from './tdesign';
import { setupi18n } from './locales';
import { setupContextMenu } from './contextmenu';
import { App } from 'vue';
import { setupGobalComponents } from './components';


export function setupPlugins(app: App) {
    setupPinia(app);
    setupTdesign(app);
    setupTailwindcss();
    setupi18n(app);
    setupContextMenu(app);
    setupGobalComponents(app);
}

export * from './pinia';
export * from './tailwindcss';
export * from './tdesign';
export * from './locales';
export * from './components';