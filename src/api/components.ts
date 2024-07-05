import request from "@/plugins/axios";
import { ProTableRequest, ProTableResult } from "procomponent-tdesign-vue";

interface PageDataResult {
    'id|+1': number,
    'username': string,
    'title': string,
    'description': string,
    'address': string,
    'code': number,
    'createtime': string
}

export function getTableData(data: ProTableRequest) {
    return request.post<ProTableResult<PageDataResult>>('/api/table_data', data);
}