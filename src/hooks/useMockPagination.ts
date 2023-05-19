import { mockAxios } from "@/helpers/axios";
import RequestProps, { RequestTuple } from "@/type/request";
import get from 'lodash/get';
import useAxiosMethods from "./useAxiosMethods";
import { useRef, useState } from "react";
import { toast } from "@/components/toast";
import { useRequest } from "ahooks";

/**
 * 
 * @param request method:请求方式，url：请求路径
 * @param params data: 接口请求参数，config：ahook的useRequest的第二个参数
 * @returns {
 *  list: [], 分页数据
 *  clear:()=>void, 清除list数据，并回到初始pageConfig
 *  getList:() => void, 继续请求
 *  ifDone, 是否完成所有数据加载
 *  initList, 初始化
 *}
 */

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

    // 请求接口的函数
    const http: () => any = async () => {

        if (pageConfig.current.ifDone) return;

        const res = await controller[method](url, {
            ...data,
            pageSize: pageConfig.current.pageSize,
            pageNum: pageConfig.current.pageNum,
        });

        const returnCode = get(res, 'data.code', '');
        const returnDesc = get(res, 'data.desc', '');

        // 判断接口是否正常
        if (returnCode !== '0000') return toast(returnDesc, 2000);

        const returnData = get(res, 'data.data', {}) as any;

        // 此处的 rows，total 根据后端接口定义的字段来取
        const { rows, total } = returnData as any;

        // 核心代码
        setList(i => {
            const current = [...i, ...rows];

            // 如果当前已经渲染的条数 > 总条数 就停止
            if (current.length >= total) {
                pageConfig.current.ifDone = true;
            }
            pageConfig.current.pageNum += 1;

            return current;
        });

    };

    const alibabaHook = useRequest(http, config);

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