import { cloneDeep } from "lodash-es";
import { computed, isRef, readonly, ref } from "vue";

const useState = <T>(value: T) => {

    const innerState = ref<T>();

    const defaultValue = cloneDeep(value);

    initState();

    function initState() {
        if (isRef(value)) {
            innerState.value = value.value as T;
        } else {
            innerState.value = value;
        }
    }

    function setState(newValue: T) {
        innerState.value = newValue;
    }

    const state = computed({
        set(value: T) {
            if (value === innerState.value) return;
            setState(value);
        },
        get() {
            return innerState.value;
        }
    });

    const resetState = () => {
        setState(cloneDeep(defaultValue));
    }

    return [readonly(state), setState, resetState, defaultValue] as const;
}

export default useState;