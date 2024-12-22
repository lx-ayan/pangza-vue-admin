import axios, { AxiosRequestConfig, Canceler } from "axios";
import { isFunction } from "lodash-es";

let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');


class AxiosCanceler {

    addPending(config: AxiosRequestConfig) {
        this.removePending(config);
        const url = getPendingUrl(config);
        config.cancelToken = config.cancelToken || new axios.CancelToken(c => {
            if (!pendingMap.has(url)) {
                pendingMap.set(url, c);
            }
        })
    }

    removePending(config: AxiosRequestConfig) {
        const url = getPendingUrl(config);
        if (pendingMap.has(url)) {
            const cancel = pendingMap.get(url);
            cancel && cancel(url);
            pendingMap.delete(url);
        }
    }

    removeAllPending() {
        pendingMap.forEach(cancel => {
            cancel && isFunction(cancel) && cancel();
        })
        pendingMap.clear();
    }

    reset() {
        pendingMap = new Map<string, Canceler>();
    }

}

export default AxiosCanceler;