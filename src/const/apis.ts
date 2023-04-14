import { RequestTuple } from "@/type/request";

const ApiCollector: {
    [propName: string]: RequestTuple
} = {
    
    getCmsCatalogList: {
        method: 'get',
        // url: '/qcloud-cos/shenshipin-1253925857/credential',
        url: '/api/login',
        // url: '/catalog/getCatalogList',
    }


}

export default ApiCollector;