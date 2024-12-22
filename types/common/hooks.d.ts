interface DebounceOption {
    once?: boolean;
    immediate?: boolean;
    debounce?: boolean;
}

type CancelFn = () => void;

type DebounceFn<T extends unknown[]> = (...args: T) => void;

type UseDebounceFnResult<T extends unknown[]> = (handle: DebounceFn<T>, wait: number, option?: DebounceOption) => [DebounceFn<T>, CancelFn];

interface UseXLSXOption {
    json?: boolean;
    needHeader?: boolean;
    emptyText?: string;
}