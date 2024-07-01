import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

/**
 * @description pinia持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaPersistedState = (key: string, paths?: string[]) => {
    const obj: PersistedStateOptions = {
        key,
        storage: localStorage,
        paths
    };
    return obj;
}

export default piniaPersistedState;
