import { Options } from "ahooks/lib/useRequest/src/types";


export interface RequestTuple {
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
}

export default interface RequestProps<T> {
    data?: any,
    config?: Options<{
        data: T;
    }, any>;
}