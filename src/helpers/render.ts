import ReactDOM from 'react-dom/client';

export default async function render(App) {

    // 获取运行环境
    const UA = window.navigator.userAgent;
    const isMiniProgram = /miniprogram/i.test(UA);
    window['isMiniProgram'] = isMiniProgram ? true : false;

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
        run();
    }
}

