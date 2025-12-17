export interface DebounceOption {
    immediate?: boolean;
}

export function useDebounce(callback: FunctionArgs, wait: number = 300, option: DebounceOption = {}) {

    let timer: Nullable<ReturnType<typeof setTimeout>> = null;

    let { immediate = false } = option;

    function cancel() {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function handle(this: ThisParameterType<FunctionArgs>, ...args: any[]) {
        return new Promise((resolve, reject) => {
            cancel()
            try {
                if (immediate) {
                    immediate = false;
                    timer = setTimeout(async () => {
                        const result = await callback(...args);
                        resolve(result);
                    })
                } else {
                    timer = setTimeout(async () => {
                        const result = await callback(...args);
                        resolve(result);
                    }, wait);
                }
            } catch (e) {
                reject(e);
            }
        })
    }

    return [handle, cancel] as const;
}