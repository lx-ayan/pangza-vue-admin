interface ThrottleOptions {
    count?: number;
    interval?: number;
    onError?: (error: Error) => void;
    onThrottled?: () => void;
}

// 使用泛型增强类型安全性
const useThrottle = <T extends (...args: any[]) => any>(
    callback: T,
    options: ThrottleOptions = {}
) => {
    const {
        count = 1,
        interval = 1000,
        onError,
        onThrottled
    } = options;

    let callCount = 0;
    let lastWindowStartTime = 0;
    let lastResult: ReturnType<T>;

    const reset = () => {
        callCount = 0;
        lastWindowStartTime = 0;
    };

    const throttledFunction = (...args: Parameters<T>): ReturnType<T> => {
        const now = Date.now();
        const isNewWindow = now - lastWindowStartTime >= interval;

        if (isNewWindow) {
            callCount = 0;
            lastWindowStartTime = now;
        }

        if (callCount < count) {
            try {
                lastResult = callback(...args);
                callCount++;
                return lastResult;
            } catch (error) {
                if (onError) {
                    onError(error as Error);
                } else {
                    console.error('Throttled function error:', error);
                }
            }
        } else {
            if (onThrottled) {
                onThrottled();
            }
        }

        return lastResult;
    };

    return { throttledFunction, reset };
};

export default useThrottle;