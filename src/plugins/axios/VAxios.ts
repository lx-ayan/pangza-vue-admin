import { hideFullLoading, showFullLoading } from "@/components/Loading";
import AXIOS_CONFIG from "@/config/axios.config";
import { RequestMethod } from "@/utils/data/enums";
import ObjectUtil from "@/utils/clz/ObjectUtil";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";
import axios from "axios";
import AxiosCanceler from "./AxiosCanceler";
import { axiosErrorHandler } from "./AxiosError";
import useUserStore from "@/store/userStore";

const axiosCanceler = new AxiosCanceler();

class VAxios {
  private instance: Nullable<AxiosInstance> = null;

  private constructor(config: CreateAxiosDefaults) {
    this.createAxios(config);
  }

  private createAxios(config: CreateAxiosDefaults) {
    if (ObjectUtil.isEmpty(this.instance)) {
      this.instance = axios.create(config);
      this.setInterceptors();
    }
  }

  private setInterceptors() {
    this.instance?.interceptors.request.use(
      AXIOS_CONFIG.requestInterceptor
        ? (AXIOS_CONFIG.requestInterceptor as any)
        : (config: IAxiosRequestConfig) => {
          if (config.loading) {
            showFullLoading(config.loadingText);
          }
          if (config.cancel) {
            axiosCanceler.addPending(config as AxiosRequestConfig);
          }

          const userStore = useUserStore();
          if (userStore.token) {
            config['headers']['Authorization'] = userStore.token;
          }
          return config;
        },
      () => {
        hideFullLoading();
      }
    );

    this.instance!.interceptors.response.use(
      AXIOS_CONFIG.responseInterceptor
        ? (AXIOS_CONFIG.responseInterceptor as any)
        : (response) => {
          return new Promise((resolve, reject) => {
            axiosCanceler.removePending(response.config);
            const result = axiosErrorHandler(response, false);
            hideFullLoading();
            if (result) {
              reject(result);
              return;
            }
            resolve(response.data.data);
          });
        },
      AXIOS_CONFIG.errorHandler
        ? AXIOS_CONFIG.errorHandler
        : (error) => {
          axiosErrorHandler(error);
          hideFullLoading();
        }
    );
  }

  public static createVAxios(config: CreateAxiosDefaults) {
    const vAxios = new VAxios(config);
    return vAxios;
  }

  public request<T, D = ResponseData<T>>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance!.request<D>(config).then(res => {
        resolve(res as T);
      }).catch(err => {
        reject(err);
      })
    })
  }

  public post<T>(url: string, data: any, options: AxiosRequestConfig = {}) {
    return this.request<T>({
      ...options,
      url,
      data,
      method: RequestMethod.POST,
    });
  }

  public get<T>(url: string, data: any, options: AxiosRequestConfig = {}) {
    return this.request<T>({
      ...options,
      url,
      params: data,
      method: RequestMethod.GET,
    });
  }

  public put<T>(url: string, data: any, options: AxiosRequestConfig = {}) {
    return this.request<T>({
      ...options,
      url,
      data,
      method: RequestMethod.PUT,
    });
  }

  public delete<T>(url: string, data: any, options: AxiosRequestConfig = {}) {
    return this.request<T>({
      ...options,
      url,
      params: data,
      method: RequestMethod.DELETE,
    });
  }
}

export default VAxios;
