import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

interface IAxiosConfig {
    baseURL?: string;
    timeout?: number;
}

/**
 * @cancel 是否取消重复请求
 * @loading 是否全局加载 loading
 * @loadingText 全局加载提示内容
 * @notAuth 接口不需要认证 token 直接请求
 */
interface IAxiosRequestConfig extends InternalAxiosRequestConfig {
    cancel?: boolean;
    loading?: boolean;
    loadingText?: string;
    notAuth?: boolean;
}

type RequestConfig = Optional<IAxiosRequestConfig, 'headers'>;

interface UploadFileParams {
    name?: string;
    file: File | Blob;
    filename?: string;
    [key: string]: any;
}