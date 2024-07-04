import { isFunction } from "@/utils/is";
import { Nullable, TimeoutHandle } from "@t/global";

export interface DebounceOption {
    once?: boolean;
    immediate?: boolean;
    debounce?: boolean;
}

export type CancelFn = () => void;

export type DebounceFn<T extends unknown[]> = (...args: T) => void;

export type UseDebounceFnResult<T extends unknown[]> = (handle: DebounceFn<T>, wait: number, option?: DebounceOption) => [DebounceFn<T>, CancelFn];

function useDebounce<T extends unknown[]>(handle: DebounceFn<T>, wait: number, options: DebounceOption = {}) {
    if (!isFunction(handle)) throw new Error('handle is not Function');
    let { immediate = false } = options;
    const { debounce = false, once = false } = options;
    let timeout: Nullable<TimeoutHandle>;
    let cancelAble: boolean | null = false;

    function clearTime() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    }

    function cancel() {
        clearTime();
        cancelAble = false;
    }

    function cancelExecute() {
        once && cancel();
    }

    function fn(this: unknown, ...args: T) {
        const execute = () => {
            !debounce && clearTime();
            handle.call(this, ...args);
            cancelExecute();
        }

        if (immediate) {
            immediate = false;
            const callNow = !timeout;
            if (callNow) {
                execute();
                timeout = null;
            }
        } else {
            debounce && clearTime();
            if (!timeout || debounce) {
                timeout = setTimeout(execute, wait);
            }
        }
    }

    return [fn, cancel];
}

export default useDebounce;