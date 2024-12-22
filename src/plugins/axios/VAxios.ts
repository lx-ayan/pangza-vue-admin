import { RequestMethodEnum, ResponseCodeEnum } from "@/common/enums";
import { IAxiosConfig, IAxiosRequestConfig, RequestConfig } from "@t/common/axios";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { isUndefined } from "lodash-es";
import AxiosCanceler from "./AxiosCanceler";
import { hideFullScreenLoading, showFullScreenLoading } from "@/config/loading";
import { MessagePlugin } from "tdesign-vue-next";
import router from "@/router";
import { t } from "../locales";
import { AXIOS_RESULT_400, AXIOS_RESULT_401, AXIOS_RESULT_403, AXIOS_RESULT_404, AXIOS_RESULT_405, AXIOS_RESULT_408, AXIOS_RESULT_500, AXIOS_RESULT_502, AXIOS_RESULT_503, AXIOS_RESULT_504, AXIOS_RESULT_DEFAULT } from "@/common/lang";
import { removeNProgress, startNProgress } from "@/config/nprogress";
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
                    hideFullScreenLoading();
                    removeNProgress();
                    resolve(response.data.data);
                } else {
                    reject(t(response.data.message) || t(AXIOS_RESULT_DEFAULT))
                }
            })
        }, (error) => this.errorHandler(error));

    }

    private async errorHandler(error: AxiosError) {
        removeNProgress();
        hideFullScreenLoading();
        const { response } = error;
        if (error.message.indexOf("timeout") !== -1) MessagePlugin.error(t(AXIOS_RESULT_408));
        if (error.message.indexOf("Network Error") !== -1) MessagePlugin.error(t(AXIOS_RESULT_DEFAULT));
        switch (response?.status) {
            case 400:
                MessagePlugin.error(t(AXIOS_RESULT_400));
                break;
            case 401:
                MessagePlugin.error(t(AXIOS_RESULT_401));
                break;
            case 403:
                MessagePlugin.error(t(AXIOS_RESULT_403));
                break;
            case 404:
                MessagePlugin.error(t(AXIOS_RESULT_404));
                break;
            case 405:
                MessagePlugin.error(t(AXIOS_RESULT_405));
                break;
            case 408:
                MessagePlugin.error(t(AXIOS_RESULT_408));
                break;
            case 500:
                MessagePlugin.error(t(AXIOS_RESULT_500));
                break;
            case 502:
                MessagePlugin.error(t(AXIOS_RESULT_502));
                break;
            case 503:
                MessagePlugin.error(t(AXIOS_RESULT_503));
                break;
            case 504:
                MessagePlugin.error(t(AXIOS_RESULT_504));
                break;
            default:
                MessagePlugin.error(t(AXIOS_RESULT_DEFAULT));
                break
        }
        if (!window.navigator.onLine) router.replace("/500");
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