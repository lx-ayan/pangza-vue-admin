import { App } from "vue";

const modules = import.meta.glob('../../components/**/*.vue', { eager: true });

export function setupGobalComponents(app: App) {
    Object.entries(modules).forEach(([file, module]: any) => {
        if (module.default.globalComponent) {
            if (module.default.name) {
                app.component(module.default.name, module.default);
            } else {
                const fileNameArr = file.split('/');
                const idx = fileNameArr.findIndex(fileName => fileName == 'index.vue');
                if (idx != 0) {
                    app.component(fileNameArr[idx - 1], (module[file] as any).default);
                }
            }
        }
    })
}