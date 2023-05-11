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
    }
};

export default ApiCollector;