import { AxiosRequestConfig } from "axios";

interface LabelOption {
    label: string;
    value: string;
    disabled?: boolean;
}

type LabelOptionList = LabelOption[];

type FilterByValue = (arr: LabelOptionList, value: string) => string | undefined;

interface IAxiosConfig {
    baseUrl: string;
    timeout?: number;
    requestInterceptor?: (config: AxiosRequestConfig) => InternalAxiosRequestConfig,
    responseInterceptor?: (response: AxiosResponse) => AxiosResponse | Promise<any>
}

interface ResponseData<T = any> {
    code: number;
    data: T;
    message?: string;
}

declare type Nullable<T> = T | null;

declare type TimeoutHandle = ReturnType<typeof setTimeout>;
