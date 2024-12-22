import request from "@/plugins/axios";
import { ProTableRequest, ProTableResult } from "tdesign-pro-component";

export function getTableData(data: ProTableRequest<TableData>) {
    return request.post<ProTableResult<TableData>>('/api/table', data);
}