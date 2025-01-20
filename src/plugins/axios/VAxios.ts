import { RequestMethodEnum, ResponseCodeEnum } from "@/common/enums";
import { IAxiosConfig, IAxiosRequestConfig, RequestConfig } from "@t/common/axios";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { isUndefined } from "lodash-es";
import AxiosCanceler from "./AxiosCanceler";
import { hideFullScreenLoading, showFullScreenLoading } from "@/config/loading";
import { removeNProgress, startNProgress } from "@/config/nprogress";
import axiosEmiter from "./AxiosEmitter";
const axiosCanceler = new AxiosCanceler();

class VAxios {
    readonly option: IAxiosConfig | null = null;

    private static instance: AxiosInstance | null = null;

    private constructor(config: IAxiosConfig) {
        this.option = config;
        this.createAxiosInstance(config);
        this.setInterceptors();
    }

    private createAxiosInstance(config: IAxiosConfig) {
        VAxios.instance = axios.create(config);
    }

    private setInterceptors() {
        VAxios.instance?.interceptors.request.use((config: IAxiosRequestConfig) => {
            startNProgress();
            config.cancel = isUndefined(config.cancel) || false;
            if (config.cancel) {
                axiosCanceler.addPending(config);
            }

            if (config.loading) {
                showFullScreenLoading(config.loadingText);
            }

            return config;
        }, (error) => {
            hideFullScreenLoading();
            removeNProgress();
            return Promise.reject(error);
        })

        VAxios.instance?.interceptors.response.use((response) => {
            return new Promise((resolve, reject) => {
                axiosCanceler.removePending(response.config);
                if (response.data.code == ResponseCodeEnum.SUCCESS) {
                    removeNProgress();
                    resolve(response.data.data);
                } else {
                    axiosEmiter.codeErrorHandler(response, true, response.data.message);
                    reject(response.data.message || '未知错误！')
                }
                hideFullScreenLoading();

            })
        }, (error) => this.errorHandler(error));

    }

    private async errorHandler(error: AxiosError) {
        removeNProgress();
        hideFullScreenLoading();
        axiosEmiter.errorHandler(error);
        return Promise.reject(error);
    }

    public static createVAxios(config: IAxiosConfig): VAxios {
        let vAxios: NullAble<VAxios> = null;
        if (!vAxios && !VAxios.instance) {
            vAxios = new VAxios(config);
        }
        return vAxios!;
    }

    request<T = any, D = ResponseData<T>>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            VAxios.instance!.request<D>(config).then(res => {
                resolve(res as unknown as T);
            }).catch(err => {
                reject(err);
            })
        })
    }

    post<T = any>(url: string, data?: any, option?: RequestConfig) {
        return this.request<T>({
            method: RequestMethodEnum.POST,
            url,
            data,
            ...option
        })
    }

    get<T = any>(url: string, data?: any, option?: RequestConfig) {
        return this.request<T>({
            method: RequestMethodEnum.GET,
            url,
            params: data,
            ...option
        })
    }

    put<T = any>(url: string, data?: any, option?: RequestConfig) {
        return this.request<T>({
            method: RequestMethodEnum.PUT,
            url,
            data,
            ...option
        })
    }

    delete<T = any>(url: string, params: any, option?: RequestConfig) {
        return this.request<T>({
            url,
            params,
            method: RequestMethodEnum.DELETE,
            ...option
        })
    }

    download(url: string, params?: object, _object = {}): Promise<BlobPart> {
        return VAxios.instance!.post(url, params, { ..._object, responseType: "blob" });
    }
}

export default VAxios;