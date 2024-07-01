import { RequestMethodEnum } from "@/common/enums";
import { IAxiosConfig, ResponseData } from "@t/global";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class VAxios {
    readonly option: IAxiosConfig | null = null;

    private instance: AxiosInstance | null = null;

    constructor(config: IAxiosConfig) {
        this.option = config;
        this.createVAxios();
        this.setInterceptors();
    }

    private setInterceptors() {
        const { requestInterceptor, responseInterceptor } = this.option!;
        this.instance?.interceptors.request.use(request => {

            if (requestInterceptor) {
                request = requestInterceptor(request);
            }
            return request;
        })

        this.instance?.interceptors.response.use(response => {
            return response;
        })

        if (responseInterceptor) {
            this.instance?.interceptors.response.use(responseInterceptor);
        }
    }

    createVAxios() {
        if (!this.instance) {
            this.instance = axios.create(this.option!);
        }
    }

    static createAxios(config: AxiosRequestConfig) {
        return axios.create(config);
    }

    getAxios() {
        return this.instance;
    }

    request<T = any, D = ResponseData<T>>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance!.request<D>(config).then(res => {
                resolve(res as unknown as T);
            }).catch(err => {
                reject(err);
            })
        })
    }

    post<T = any>(url: string, data?: any, option?: AxiosRequestConfig) {
        return this.request<T>({
            method: RequestMethodEnum.POST,
            url,
            data,
            ...option
        })
    }

    get<T = any>(url: string, data?: any, option?: AxiosRequestConfig) {
        return this.request<T>({
            method: RequestMethodEnum.GET,
            url,
            params: data,
            ...option
        })
    }

    put<T = any>(url: string, data?: any, option?: AxiosRequestConfig) {
        return this.request<T>({
            method: RequestMethodEnum.PUT,
            url,
            data,
            ...option
        })
    }

    delete<T = any>(url: string, params: any, option?: AxiosRequestConfig) {
        return this.request<T>({
            url,
            params,
            method: RequestMethodEnum.DELETE,
            ...option
        })
    }
}

export default VAxios;