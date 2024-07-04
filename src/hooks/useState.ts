import { UnwrapRef, computed, reactive, readonly } from "vue";

function useState<T = any>(data: T) {

    const innerState = reactive<{ value: T }>({
        value: data
    });

    const defaultState = readonly(innerState);

    function setState(_value: T) {
        if (innerState.value == _value) return;
        innerState.value = _value as UnwrapRef<T>;
    }

    const state = computed(() => innerState.value);

    return [readonly(state), setState, defaultState]
}

export default useState;