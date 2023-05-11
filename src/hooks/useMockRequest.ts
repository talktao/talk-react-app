import { cmsAxios, mockAxios } from "@/helpers/axios";
import RequestProps, { RequestTuple } from "@/type/request";
import { useRequest } from "ahooks";
import get from 'lodash/get';
import useAxiosMethods from "./useAxiosMethods";


export default function useMockRequest<T>(request: RequestTuple, params: RequestProps<T>) {
    const { method, url } = request;
    const { data = {}, config = {} } = params;
    const controller = useAxiosMethods(mockAxios);

    if (!controller[method]) throw new Error('当前请求方法仅支持get/post/put/delete');

    const http = () => controller[method](url, data);
    const alibabaHook = useRequest(http, config);
    const { data: res } = alibabaHook;
    const returnData = get(res, 'data.data', []) as T;
    return {
        ...alibabaHook,
        data: returnData
    };
}