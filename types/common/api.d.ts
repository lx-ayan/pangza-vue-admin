interface ResponseData<T> {
    code: number;
    data?: T;
    message?: string;
}