import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import { setupTDesign } from "./tdesign";
import { setupPinia } from "./pinia";
import { setupContextMenu } from "./contextmenu";
import 'animate.css';
import { setupGlobalComponent } from "./components";

export function setupPlugins(app: App) {
    setupTailwindcss();
    setupTDesign(app);
    setupPinia(app);
    setupContextMenu(app);
    setupGlobalComponent(app);
}

