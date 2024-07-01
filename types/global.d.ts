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

interface MenuMeta {
    title: string,
    icon?: string;
    close?: boolean;
    web?: boolean;
    open?: boolean;
    href?: string;
}

interface IMenuItem {
    path: string;
    meta?: MenuMeta;
}

interface IMenu extends IMenuItem {
    children?: IMenuItemp[],
}

interface TagView {
    title: string;
    path: string;
    icon?: string;
    close?: boolean;
}

