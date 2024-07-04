import { ProFormOption, ProFormRef } from "procomponent-tdesign-vue";
import { ref } from "vue";

export type ProFormRequestFn<T> = () => Promise<T>;

function useProForm<T = any>(proFormOptions: ProFormOption[] = [], proTableRequest: ProFormRequestFn<T>) {
    const formRef = ref<ProFormRef | null>(null);

    const options = ref<ProFormOption[]>(proFormOptions);

    async function request() {
        return await proTableRequest();
    }

    return [options, request, formRef];
}

export default useProForm;