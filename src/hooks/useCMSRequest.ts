import { cmsAxios } from "@/helpers/axios";
import RequestProps, { RequestTuple } from "@/type/request";
import { useRequest } from "ahooks";
import get from 'lodash/get';
import useAxiosMethods from "./useAxiosMethods";


export default function useCMSRequest<T>(request: RequestTuple, params: RequestProps<T>) {
    const { method, url } = request;
    const { data = {}, config = {} } = params;
    const controller = useAxiosMethods(cmsAxios);

    if (!controller[method]) throw new Error('当前请求方法仅支持get/post');

    const http = () => controller[method](url, data);
    const alibabaHook = useRequest(http, config);
    const { data: res } = alibabaHook;
    const returnData = get(res, 'data.returnData', []) as T;
    return {
        ...alibabaHook,
        data: returnData
    }
}