import { cloneDeep } from "lodash-es"
import { ref } from "vue";

const useResetState = <T>(value: T) => {
    const initalValue = cloneDeep(value);

    const state = ref(value);

    const reset = () => {
        state.value = cloneDeep(initalValue);
    }

    return [state, reset];
}

export default useResetState;