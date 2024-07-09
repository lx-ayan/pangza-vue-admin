import { equals } from "@/utils/is";
import { App } from "vue";

const module = import.meta.glob('../../components/**/index.vue', { eager: true });

/**
 * @description registry my component
 */
export function setupGlobalComponent(app: App) {
    Object.entries(module).forEach(([_fileName, _module]) => {
        const m: any = _module;
        if (m.default.globalComponent) {
            if (m.default.name) {
                app.component(m.default.name, (module[_fileName] as any).default);
            } else {
                const fileNameArr = _fileName.split('/');
                const idx = fileNameArr.findIndex(fileName => equals(fileName, 'index.vue'));
                if (idx != 0) {
                    app.component(fileNameArr[idx - 1], (module[_fileName] as any).default);
                }
            }
        }
    })
}