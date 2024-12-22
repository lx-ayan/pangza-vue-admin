import { computed, reactive, readonly, ref, UnwrapRef } from "vue";

export function useState<T>(data: T) {
    const innerState = reactive({
        value: data
    });

    const defaultValue = readonly(ref(innerState));

    function setState(value: T) {
        if(value != innerState.value) {
            innerState.value = value as UnwrapRef<T>;
        }
    }

    const state = computed(() => innerState.value);

    return [readonly(state), setState, defaultValue];
}