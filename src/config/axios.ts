import { ResponseCodeEnum } from "@/common/enums";
import { IAxiosConfig } from "@t/global";
import { AxiosResponse } from "axios";

const axiosConfig: IAxiosConfig = {
    baseUrl: '',
    responseInterceptor: (response: AxiosResponse) => {
        return new Promise((resolve, reject) => {
            if(response.status <= 299 && response.status >= ResponseCodeEnum.SUCCESS) {
                if(response.data.code == ResponseCodeEnum.SUCCESS) {
                    resolve(response.data.data);
                } else {
                    reject(response.data.message || '响应错误')
                }
            } else if(response.status == ResponseCodeEnum.ERROR) {
                console.warn(`响应码: ${response.status}`);
                reject(response.statusText);
            } else if(response.status == ResponseCodeEnum.NOTFOUND) {
                console.warn(`响应码: ${response.status}`);
                reject(response.statusText);
            } else if(response.status == ResponseCodeEnum.NOTPERMISSION) {
                console.warn(`响应码: ${response.status}`);
                reject(response.statusText);
            } else {
                reject(response.statusText);
            }
        })
    },
} 

export default axiosConfig;