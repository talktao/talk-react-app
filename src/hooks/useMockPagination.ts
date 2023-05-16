import { mockAxios } from "@/helpers/axios";
import RequestProps, { RequestTuple } from "@/type/request";
import get from 'lodash/get';
import useAxiosMethods from "./useAxiosMethods";
import { useRef, useState } from "react";
import { toast } from "@/components/toast";
import { useRequest } from "ahooks";


export default function useMockPagination<T>(request: RequestTuple, params: RequestProps<T>) {
    const { method, url } = request;
    const { data = {}, config = {} } = params;

    const [list, setList] = useState<any[]>([]);
    const pageConfig = useRef({
        pageSize: 10,
        pageNum: 1,
        ifDone: false
    });

    const controller = useAxiosMethods(mockAxios);

    if (!controller[method]) throw new Error('当前请求方法仅支持get/post/put/delete');

    const http = async () => {

        if (pageConfig.current.ifDone) return;

        const res = await controller[method](url, {
            ...data,
            pageSize: pageConfig.current.pageSize,
            pageNum: pageConfig.current.pageNum,
        });

        const returnCode = get(res, 'data.code', '');
        const returnDesc = get(res, 'data.desc', '');

        if (returnCode !== '0000') return toast(returnDesc, 2000);

        const returnData = get(res, 'data.data', {}) as any;

        const { rows, total } = returnData as any;

        setList(ls => {
            const current = [...ls, ...rows];

            if (current.length >= total) {
                pageConfig.current.ifDone = true;
            }
            pageConfig.current.pageNum += 1;

            return current;
        });

    };

    const alibabaHook = useRequest(http, {});

    const clear = () => {
        setList(() => {
            pageConfig.current.pageNum = 1;
            pageConfig.current.ifDone = false;
            return [];
        });
    };

    const initList = () => {
        clear();
        setTimeout(http, 0);
    };

    return {
        ...alibabaHook,
        list,
        clear,
        getList: http,
        ifDone: pageConfig.current.ifDone,
        initList
    };
}