export enum ResponseCodeEnum {
    SUCCESS = 200,
    ERROR = 500,
    NOTFOUND = 404,
    NOTPERMISSION = 403,
    NOTLOGIN = 401,
    PARAMERROR = 400
}

export enum RequestMethodEnum {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT'
}

export enum StoreEnum {
    TOKEN = 'token'
}

export enum VAxiosEnum {
    TIMEOUT = 5000
}