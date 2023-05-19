import { RequestTuple } from "@/type/request";

const ApiCollector: {
    [propName: string]: RequestTuple;
} = {

    getHome: {
        method: 'get',
        url: '/api/home'
    },

    getList: {
        method: 'post',
        url: '/api/list'
    }
};

export default ApiCollector;