import { onUnmounted, ref, watch } from "vue";

type UseEffectFunction = () => any;

function useEffect(fn: UseEffectFunction, values?: any[]) {
    const unMountedFn = ref<UseEffectFunction | null>(null);

    if (values && !values.length) {
        unMountedFn.value = fn();
    }

    onUnmounted(() => {
        if (unMountedFn.value) {
            unMountedFn.value();
            unMountedFn.value = null;
        }
    })


    if (values) {
        watch(values, () => {
            unMountedFn.value = fn();
        }, { deep: true })
    }
}

export default useEffect;