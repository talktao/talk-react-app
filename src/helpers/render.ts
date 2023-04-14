import ReactDOM from 'react-dom/client';

export default async function render(App) {

    // 获取语言环境
    const lng = location.href.includes('zh-CN') ? 'zh_CN' : (location.href.includes('en') ? 'en' : 'zh_CN'); // 默认中文

    // 获取运行环境
    const UA = window.navigator.userAgent;
    const isMiniProgram = /miniprogram/i.test(UA);
    window['isMiniProgram'] = isMiniProgram ? true : false;
    window['lng'] = lng;

    // 挂载 渲染应用
    const run = () => {
        const root = ReactDOM.createRoot(document.getElementById('root')!);
        root.render(
            App
        );
    };

    try {

        // try do something
    } catch (err) {

    } finally {
        run()
    }
}

