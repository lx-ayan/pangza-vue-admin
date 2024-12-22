import { isFunction } from "@/utils/is";
import { error } from "@/utils/log";

export function useDebounce<T extends unknown[]>(handle: DebounceFn<T>, wait: number, option: DebounceOption = {}) {
    if(!isFunction(handle)) {
        error('handle is not function')
        return;
    }
    let { immediate = false } = option;
    const { debounce = false, once = false } = option;
    let timeout: NullAble<TimeoutHandle>;
    //@ts-ignore
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