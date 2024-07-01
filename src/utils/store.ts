import { getGlobalEnv } from "@vite/env";
import { warn } from "./log";

interface StoreData<T = any> {
    value: T;
    expire?: number;
    [key: string]: any;
}

interface IStore {
    set(key: string, data: any, expire?: number, waitFn?: () => void): void;
    get<T = any>(key: string): T | undefined;
    remove(key: string): void;
    removeAll(): void
}

function getTime() {
    const unit = getGlobalEnv().VITE_STORE_TIME_UNIT;
    if (unit === 'ms') return 1;
    if (unit === 's') return 1000;
    if (unit === 'm') return 1000 * 60;
    if (unit === 'h') return 1000 * 60 * 60;
    if (unit === 'd') return 1000 * 60 * 24;
    else return 1;
}

const storeUtil: IStore = {
    set(key: string, data: any, expire?: number) {
        const storeData: StoreData = {
            value: data,
            storeData: undefined
        }
        if (expire) {
            storeData.expire = new Date().getTime() + expire * getTime();
        }
        localStorage.setItem(key, JSON.stringify(storeData));
    },
    get<T = any>(key: string) {
        const item = localStorage.getItem(key);
        if (item) {
            const data = JSON.parse(item) as StoreData;
            if (data.expire && data.expire < new Date().getTime()) {
                localStorage.removeItem(key);
                return undefined;
            }
            return data.value as T;
        } else {
            return undefined;
        }
    },
    remove(key: string) {
        if(!key) {
            warn('key is undefined');
            return;
        }
        localStorage.removeItem(key);
    },
    removeAll() {
        localStorage.clear();
    }
}

export default storeUtil;