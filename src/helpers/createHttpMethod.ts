
export default function createHttpMethod(axios) {
    const get = (url, data) => axios.get(url, {
        params: data
    })

    const post = (url, data) => axios.post(url, data);

    return {
        get,
        post
    }
}