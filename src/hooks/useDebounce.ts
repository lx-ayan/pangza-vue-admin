const useDebounce = (callback: Function, wait: number, immediate: boolean = false) => {
    let timeoutId: NullAble<NodeJS.Timeout> = null;

    const cancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }

    const execute = (...args: any[]) => {
        const callNow = immediate && !timeoutId;
        let result: any;
        cancel();

        if (callNow) {
            result = callback(...args);
        } else {
            timeoutId = setTimeout(() => {
                if (!immediate) {
                    result = callback(...args);
                }
                timeoutId = null;
            }, wait);
        }

        return result;
    };

    return [execute, cancel] as const;
}