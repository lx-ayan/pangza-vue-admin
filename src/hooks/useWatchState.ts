import { ref, watch, WatchOptions } from "vue";

const useWatchState = <T>(value: T, cb: (newValue: T, oldValue: T) => any, options?: WatchOptions) => {
    const state = ref<T>(value);
    
    watch(state, (newValue, oldValue) => {
        cb(newValue, oldValue);
    }, options);

    return state;
}

export default useWatchState;
