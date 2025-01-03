import { AxiosError, AxiosResponse } from "axios";

class AxiosEmitter {
    private handlers = {
        'PARAM_ERROR': new Set<Function>(),
        'INVALID_TOKEN': new Set<Function>(),
        'TIMEOUT': new Set<Function>(),
        'NETWORK_ERROR': new Set<Function>(),
        'SERVER_ERROR': new Set<Function>(),
        'NOT_FOUND': new Set<Function>(),
        'NO_PERMISSION': new Set<Function>(),
        'GATEWAY_ERROR': new Set<Function>(),
        'DEFAULT': new Set<Function>(),
    }

    public errorHandler = (error: AxiosError) => {
        if (error.message.indexOf("timeout") !== -1) this.emit('TIMEOUT');
        if (error.message.indexOf("Network Error") !== -1) this.emit('NETWORK_ERROR');
        const { response } = error;
        this.codeErrorHandler(response!);
    }

    codeErrorHandler(response: AxiosResponse, customer = false, message?: string) {
        const { status, data } = response;
        const code = customer ? data.code : status;
        switch (code) {
            case 400:
                this.emit('PARAM_ERROR', message);
                break;
            case 401:
                this.emit('INVALID_TOKEN', message);
                break;
            case 403:
                this.emit('NO_PERMISSION', message);
                break;
            case 404:
                this.emit('NOT_FOUND', message);
                break;
            case 500:
                this.emit('SERVER_ERROR', message);
                break;
            case 502:
                this.emit('GATEWAY_ERROR', message);
                break;
            default:
                this.emit('DEFAULT', message)
                break;
        }
    }

    private emit = (eventName: keyof typeof this.handlers, ...args: any) => {
        this.handlers[eventName].forEach(handler => handler(...args))
    }

    public listen = (eventName: keyof typeof this.handlers, handler: Function) => {
        this.handlers[eventName].add(handler)
    }
}

export default new AxiosEmitter();