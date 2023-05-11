
export default function createHttpMethod(axios) {
    const get = (url, data) => axios.get(url, {
        params: data
    });

    const post = (url, data) => axios.post(url, data);

    const put = (url, data) => axios.put(url, data);

    const del = (url, data) => axios.delete(url, data);

    return {
        get,
        post,
        put,
        del
    };
}