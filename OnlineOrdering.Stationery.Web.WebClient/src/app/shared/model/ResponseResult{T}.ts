export interface ResponseResult<T> {
    result: T;
    isSuccess: boolean;
    errors: string[];
}