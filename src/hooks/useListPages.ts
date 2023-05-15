import { useEffect } from "react";
import useMockPagination from "./useMockPagination";
import useReachBottom from "./useReachBottom";
import { RequestTuple } from "@/type/request";


export default function useListPages(request: RequestTuple, params = {}) {
    const { list, initList, getList, ifDone } = useMockPagination(request, params);

    useEffect(() => {
        getList();
    }, []);
    useReachBottom(getList);

    return { list, ifDone };
}