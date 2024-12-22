import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

export function piniaSotrageConfig(id: string, paths?: string[]) {

    const config: PersistedStateOptions = {
        paths,
        key: id,
        storage: localStorage
    } 

    return config;
}