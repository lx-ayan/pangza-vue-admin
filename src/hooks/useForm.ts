import type { ProFormOption, ProFormRef } from "tdesign-pro-component";
import { ref } from "vue";
export type ProFormRequestFn<T> = () => Promise<T>;

function useProForm<T = any>(proFormOptions: ProFormOption[] = [], proTableRequest: ProFormRequestFn<T>) {
    const formRef = ref<ProFormRef | null>(null);

    const options = ref<ProFormOption[]>(proFormOptions);

    async function request() {
        return await proTableRequest();
    }

    return [options, request, formRef] as const;
}

export default useProForm;