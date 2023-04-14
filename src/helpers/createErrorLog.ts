

export default function createErrorLog(keyMap) {
    const [status, msg] = keyMap;

    return (error) => {

        // 对响应错误做点什么
        const { response, config: { url, params } } = error;
        console.error(`
            =========warn begin===========
            当前请求：${url} 异常
            当前请求参数 👇
            ${JSON.stringify(params)}
            错误码 ${response[status]}
            错误消息 ${response[msg]}
            =========warn end=============
        `)
        return Promise.reject(error.response);
    }
}