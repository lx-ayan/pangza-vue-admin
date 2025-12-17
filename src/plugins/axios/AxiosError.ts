import type { AxiosResponse } from "axios";
const ERROR_MESSAGE = {
    NETWORK_ERROR: '网络异常，请稍后重试',
    TIMEOUT_ERROR: '请求超时，请稍后重试',
    SERVER_ERROR: '服务器异常，请稍后重试',
    UNAUTHORIZED_ERROR: '登录失效，请重新登录',
    PARAMS_ERROR: '参数错误，请检查后重试',
    FORBEDDEN_ERROR: '没有权限访问该资源',
    NOT_FOUND_ERROR: '请求资源未找到'
}

enum RESPONSE_CODE {
    SUCCESS = 200,
    ERROR = 500,
    PARAM_ERROR = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    TIMEOUT = 408
}

/**
 * @param error 
 * @param isResponseError 
 * @description 统一的错误处理器
 */
export function axiosErrorHandler(error: any, isResponseError: boolean = true) {
    if (!isResponseError) {
        return userResponseErrorHandler(error);
    }
    return responseErrorHandler(error);
}


/**
 * @description 前端与后端建立规定的异常处理
 */
function userResponseErrorHandler(response: AxiosResponse) {
    const { code, message } = response.data;
    if (code === RESPONSE_CODE.SUCCESS) {
        return null;
    }
    return errorHandlerImpl(response.data.code, message);
}

/**
 * @description 浏览器自己的异常处理器
 */
function responseErrorHandler(response: any) {
    return errorHandlerImpl(response.status);
}

function errorHandlerImpl(code: number, message?: string) {
    switch (code) {
        case RESPONSE_CODE.ERROR:
            return message || ERROR_MESSAGE.SERVER_ERROR;
        case RESPONSE_CODE.PARAM_ERROR:
            return message || ERROR_MESSAGE.PARAMS_ERROR;
        case RESPONSE_CODE.UNAUTHORIZED:
            return message || ERROR_MESSAGE.UNAUTHORIZED_ERROR;
        case RESPONSE_CODE.FORBIDDEN:
            return message || ERROR_MESSAGE.FORBEDDEN_ERROR;
        case RESPONSE_CODE.NOT_FOUND:
            return message || ERROR_MESSAGE.NETWORK_ERROR;
        case RESPONSE_CODE.TIMEOUT:
            return message || ERROR_MESSAGE.TIMEOUT_ERROR;
        case RESPONSE_CODE.SUCCESS:
            return null;
        default:
            return message || ERROR_MESSAGE.NETWORK_ERROR;
    }
}