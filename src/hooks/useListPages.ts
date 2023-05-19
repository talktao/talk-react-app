import useMockPagination from "./useMockPagination";
import useReachBottom from "./useReachBottom";
import { RequestTuple } from "@/type/request";


export default function useListPages(request: RequestTuple, params = {}) {
    const { loading, list, initList, getList, ifDone } = useMockPagination(request, params);

    useReachBottom(getList);

    return { loading, list, ifDone };
}