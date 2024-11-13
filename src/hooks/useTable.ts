import { ProTableOption, ProTableRef, ProTableRequest, ProTableResult } from "tdesign-pro-component";
import { ref } from "vue";

export type ProTableRequestFn<T> = (form: ProTableRequest) => Promise<ProTableResult<T>>;

function useProTable<T = any>(proTableOptions: ProTableOption[] = [], proTableRequest: ProTableRequestFn<T>) {
    const tableRef = ref<ProTableRef | null>(null);

    const options = ref<ProTableOption[]>(proTableOptions);

    async function request(data: ProTableRequest) {
        return await proTableRequest(data);
    }

    return [options, request, tableRef] as const;
}

export default useProTable;