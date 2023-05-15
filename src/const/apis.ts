import { RequestTuple } from "@/type/request";

const ApiCollector: {
    [propName: string]: RequestTuple;
} = {

    getHome: {
        method: 'get',
        url: '/api/home'
    },

    getCmsCatalogList: {
        method: 'get',
        url: '/api/login',
    },

    getList: {
        method: 'get',
        url: '/api/list'
    }
};

export default ApiCollector;