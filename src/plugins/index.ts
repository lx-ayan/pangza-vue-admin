import { setupPinia } from './pinia';
import { setupTailwindcss } from './tailwindcss';
import { setupTdesign } from './tdesign';
import { setupContextMenu } from './contextmenu';
import { App } from 'vue';
import { setupGobalComponents } from './components';


export function setupPlugins(app: App) {
    setupPinia(app);
    setupTdesign(app);
    setupTailwindcss();
    setupContextMenu(app);
    setupGobalComponents(app);
}

export * from './pinia';
export * from './tailwindcss';
export * from './tdesign';
export * from './components'; 