import { mockAxios } from "@/helpers/axios";
import RequestProps, { RequestTuple } from "@/type/request";
import { useRequest } from "ahooks";
import get from 'lodash/get';
import useAxiosMethods from "./useAxiosMethods";

/**
 * @param request method:请求方式，url：请求路径
 * @param params data: 接口请求参数，config：ahook的useRequest的第二个参数
 * @returns 核心数据data和useRequest给我们提供的一系列数据及方法
 */

export default function useMockRequest<T>(request: RequestTuple, params: RequestProps<T>) {
    const { method, url } = request;
    const { data = {}, config = {} } = params;
    const controller = useAxiosMethods(mockAxios);

    if (!controller[method]) throw new Error('当前请求方法仅支持get/post/put/delete');

    // 发送请求的函数
    const http = () => controller[method](url, data);

    // 通过useRequest发送请求
    const alibabaHook = useRequest(http, config);

    // 拿到返回值
    const { data: res } = alibabaHook;

    // 获取接口中的数据
    const returnData = get(res, 'data.data', []) as T;

    return {
        ...alibabaHook,
        data: returnData
    };
}