---
theme: devui-blue
highlight: atom-one-dark
---
## 描述

基于React + Webpack + Mobx + Less + TS + rem适配方案，构建H5模板脚手架 

项目地址：[github](https://github.com/talktao/talk-react-app)

项目预览：[查看 demo](https://talktao.github.io/talk-react-app) 建议手机端查看，如pc端浏览器打开需切换到手机调试模式

### Node 版本要求

本示例 Node.js 16.15.0

你可以使用 [nvm](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnvm-sh%2Fnvm "https://github.com/nvm-sh/nvm") 或 [nvm-windows](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fcoreybutler%2Fnvm-windows "https://github.com/coreybutler/nvm-windows") 在同一台电脑中管理多个 Node 版本。

### 启动项目

```
git clone https://github.com/talktao/talk-react-app.git

cd talk-react-app

yarn

yarn start
复制代码
```

## talk-scripts
基于[create-react-app](https://link.juejin.cn/?target=https%3A%2F%2Fcreate-react-app.dev%2Fdocs%2Fadvanced-configuration%2F "https://create-react-app.dev/docs/advanced-configuration/")(简称CRA)配置，对此我直接使用了大佬配置好了[lemon-scripts](https://juejin.cn/post/7103061841705697287)，站在巨人的肩膀上进行开发

### 支持less
原始cra默认支持的sass，笔者为什么喜欢less，可能是因为喜欢单调的颜色统一，比如下图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/decef78666a74abb8bdf5d0bf44ed94d~tplv-k3u1fbpfcp-watermark.image?)

#### 如何在cra里面改造支持less呢？

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73df381cdc7b4d3297fe8c87b04d4109~tplv-k3u1fbpfcp-watermark.image?)
当然，这还不够，还需要引入`less-loader`，安装好`less-loader`，进入到`webpack.config.js`文件下替换掉与sass有关的代码

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22363545ac0840af980c3deec0559e4a~tplv-k3u1fbpfcp-watermark.image?)

### 移动端适配
项目使用了 `px2rem-loader`，当然开发者可以自行控制是否需要适配移动端

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13a4deb16d8e4d8a8d1c2fa70681a76f~tplv-k3u1fbpfcp-watermark.image?)

如上图，本项目通过`designSize`来判断是否启动`px2rem-loader`，而`designSize`需要在`package.json`中添加如下代码，此处`designSize`的值可以根据`设计稿的尺寸`而自行定义；如果未设置，将对应`PC端`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5480b0dcbae045cdb439480f21869fef~tplv-k3u1fbpfcp-watermark.image?)

项目内还有诸多配置，这里就不一一展开，具体信息可以参考[lemon-scripts](https://juejin.cn/post/7103061841705697287)

## mobx 状态管理

目录结构

```
├── store
│   ├── count.ts
│   ├── magic.ts
复制代码
```
首先我们先在`magic.ts`中定义好我们的默认数据和修改数据的方法，如下图

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9459892264e74220834f1df2f4a9483c~tplv-k3u1fbpfcp-watermark.image?)

然后再去组件中使用

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddfa6117372445b48bccccba61d12461~tplv-k3u1fbpfcp-watermark.image?)

### 注意
此处默认导出组件时，必须使用 `observer` 包裹该组件，否则组件无法更新，如下图对比

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29547ef42f1843958dfc91bb94521eca~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8912c5fcd5447eb9d1b6ce10522778b~tplv-k3u1fbpfcp-watermark.image?)

### 官方如何解释`observer`

`observer` HOC 将自动订阅 React components 中任何 *在渲染期间* 被使用的 *可被观察的对象* 。 因此, 当任何可被观察的对象 *变化* 发生时候 组件会自动进行重新渲染（re-render）。 它还会确保组件在 *没有变化* 发生的时候不会进行重新渲染（re-render）。 但是, 更改组件的可观察对象的不可读属性, 也不会触发重新渲染（re-render）。

### 强制更新组件的其他方式
当然我们还有其他方式强制更新，在不使用`observer`的情况下，我们可以引入 `ahook` 的 `useUpdate`来对组件进行强制更新，也可以达到我们想要的效果，既然提到了`ahook`，下面我们就来初探一下这个可以提高工作效率的hooks库

## [ahook 初探](https://ahooks.js.org/zh-CN/)

在本项目中，我们将`axios`同`ahook`的`useRequest`结合，实现了首屏加载时的骨架屏效果，相信看了demo的同学已经体验了一下

### useRequest与axios封装
`useRequest` 的第一个参数是一个异步函数，在组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的 `loading` , `data` , `error` 等状态。所以本项目的请求都是基于`useRequest`来实现的，比如我们先在 `src/helpers/axios.ts` 目录下，新建一个请求的url根路径

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79c60465888a42188f231f6945403843~tplv-k3u1fbpfcp-watermark.image?)

笔者这里使用了[fastmock](https://www.fastmock.site/)在线mock来模拟真实的请求，如下图笔者建立了两个api

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b4d3ea4503b4f3ab71a529c7f834566~tplv-k3u1fbpfcp-watermark.image?)

建立完成之后，就可以到`src/const/apis`文件下，新增请求方法，如下图

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dc4200e1d1e4674ae6b4bc084efc759~tplv-k3u1fbpfcp-watermark.image?)

然后我们就可以使用`useRequest`进行请求了，如下图

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/161a306a5ad348a6a41d3602ca63987a~tplv-k3u1fbpfcp-watermark.image?)

上图，笔者在`Home`页面组件中，使用了`useMockRequest` 来请求数据，从而得到了`data, error, loading`这些返回的数据，而`useMockRequest` 正是笔者基于`ahook 的 useRequest`新封装的hook，接下来我们一起看一下`useMockRequest`中的代码

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b093f44b05f4322be0817e3ed49ba05~tplv-k3u1fbpfcp-watermark.image?)

效果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f253cb0af84347fa910082c763cd5ce1~tplv-k3u1fbpfcp-watermark.image?)

## [React-Router@6](https://reactrouter.com/)

本案例采用hash模式，history模式需要服务端配置对应的录音路径，否则会404，由于本项目会部署到github上，所以只能使用hash模式了，进入到项目目录`src/App.tsx`下

```js
import React, { Suspense } from "react";
import { RouteObject, createHashRouter, RouterProvider } from 'react-router-dom';
import KeepAlive from "@/components/keepalive";
import RootBoundary from "@/components/rootBoundary";

const Home = React.lazy(() => import('@/pages/home/index'));
const List = React.lazy(() => import('@/pages/list/index'));
const My = React.lazy(() => import('@/pages/my/index'));

// 路由映射表
const routes: RouteObject[] = [
    {
        path: '/',
        element: <KeepAlive />,
        children: [
            {
                path: '/home',
                element: <Home />,
                errorElement: <RootBoundary />,
            },
            {
                path: '/list',
                element: <List />,
                errorElement: <RootBoundary />,
            },
        ]
    },
    {
        path: '/my',
        element: <My />
    },

    // 路由重定向
    {
        path: '/',
        element: <Home />,
        errorElement: <RootBoundary />
    }
];

const router = createHashRouter(routes);

function App() {
    return (
        <Suspense fallback={<div />} >
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
```

### useNavigate
`useNavigate`编程式导航
```js
import { useNavigate } from 'react-router';

const Home: FC = () => {
    
    const navigate = useNavigate();
    
    navigate('路由路径') // navigate('/list')
}

export default Home

```
#### 类型声明
```js
declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ): void;
  (delta: number): void;
}
```
该`navigate`函数有两个签名：

-   使用可选的第二个参数传递一个`To`值（与 相同类型`<Link to>`）`{ replace, state }`或
-   在历史堆栈中传递你想要去的增量。例如，`navigate(-1)`相当于按下后退按钮。

如果使用`replace: true`，导航将替换历史堆栈中的当前条目，而不是添加新条目

### useLocation
这个钩子返回当前[`location`](https://reactrouter.com/en/main/utils/location)对象。如果您想在当前位置更改时执行一些副作用，这将很有用；比如本项目就通过`location`中的`pathname`来判断`tabbar`组件的选中

#### 本项目的tabbar

项目目录`src/component/tabbar/index.tsx`下

```js
import { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tabbarConfig } from './config';
import style from './index.module.less';

const Tabbar: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const tabbarList = useMemo(() => tabbarConfig.map(tab => (
        <div key={tab.name} className={style.tabbarItem} onClick={() => navigate(tab.route)}>
            <img src={pathname === tab.route ? tab.active : tab.icon} alt="" />
            <div className={pathname === tab.route ? style.active : ''}>{tab.name}</div>
        </div>
    )), [pathname]);

    return <div className={style.tabbar}>
        {tabbarList}
    </div>;
};

export default Tabbar;
```
项目目录`src/component/tabbar/config.ts`下配置tabbar组件内容
```js
import Home from '@/images/tabbar/home.svg';
import HomeActive from '@/images/tabbar/home-active.svg';
import My from '@/images/tabbar/my.svg';
import MyActive from '@/images/tabbar/my-active.svg';

export const tabbarConfig = [
    {
        name: '首页',
        icon: Home,
        active: HomeActive,
        route: '/home',
        title: '首页'
    },
    {
        name: '我的',
        icon: My,
        active: MyActive,
        route: '/my',
        title: '我的'
    }
];
```
## 跨域配置

如果你的项目需要跨域设置，可以使用`http-proxy-middleware`来进行配置，在`src`目录下新建一个`setupProxy.js`，内容如下

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `https://www.fastmock.site/mock/c00624da6261543b2897e35dff28607c`,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
            onProxyReq(proxyReq, req, res) {
                // add custom header to request
                // proxyReq.setHeader('Authorization', 'xxxxx');
                // console.log(req)
                // or log the req
            }
        })
    );
};
```

## 骨架屏
通过[react-content-loader](https://skeletonreact.com/)来自定义自己的骨架屏，本项目目前实现了`home页面`和`list页面`的首屏加载时的骨架屏优化

### HomeLoader首页骨架屏

每一个部分都可以自定义形状

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d40833e873b449d9fff181a740dea3e~tplv-k3u1fbpfcp-watermark.image?)

```js
import ContentLoader from "react-content-loader";

const HomeLoader = (props) => {

    let screenWidht = window.screen.width;
    let screenHeight = window.screen.height;

    return <ContentLoader
        speed={2}
        width={screenWidht}
        height={screenHeight}
        viewBox={`0 0 ${screenWidht} ${screenHeight}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#85acd5"
        {...props}
    >
        <rect x="0" y="20" width={screenWidht} height="60" />
        <rect x="0" y="125" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="165" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="205" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="245" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="285" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="325" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="365" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="405" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="445" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="485" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="525" rx="5" ry="5" width={screenWidht} height="20" />

    </ContentLoader>;
};

export default HomeLoader;
```

### ListLoader列表页骨架屏

list页面的骨架屏主要由多个个`CardLoader`组成，而`ListLoader`组件里渲染的`CardLoader`由`页面可视区域高度/卡片高度`并`向下取整 Math.floor`

#### ListCard代码
```js
import { FC, ReactNode, useState } from 'react';
import CardLoader from '../cardLoader';
import React from 'react';

const ListLoader: FC = () => {

    // 卡片高度
    const [cardHeight, setCardHeight] = useState(100);

    // 获取当前设备高度
    let screenHeight = window.screen.height;

    // 根据页面高度获取可渲染CardLoader的数量
    let renderCardLoaderNum = Math.floor(screenHeight / cardHeight);

    const loader = () => {
        let data = [] as ReactNode[];

        for (let i = 0; i < renderCardLoaderNum; i++) {
            data.push(<CardLoader height={cardHeight} />);
        }
        return data.map((item, index) => <div key={index}>{item}</div>);
    };

    return <React.Fragment>
        {loader()}
    </React.Fragment>;
};

export default ListLoader;
```

#### CardLoader代码
```js
import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader: FC<any> = props => {
    let screenWidht = window.screen.width;
    let height = props.height as any;

    return (
        <ContentLoader
            viewBox={`0 0 ${screenWidht} ${height}`}
            height={height}
            width={screenWidht}
            backgroundColor="#f3f3f3"
            foregroundColor="#85acd5"
            {...props}
        >
            <rect x="20" y="20" rx="10" ry="10" width="120" height="80" />
            <rect x="150" y="25" rx="5" ry="5" width={screenWidht - 150 - 20} height="20" />
            <rect x="150" y="55" rx="5" ry="5" width={screenWidht - 150 - 40} height="15" />
            <rect x="150" y="80" rx="5" ry="5" width={screenWidht - 150 - 60} height="10" />
        </ContentLoader>
    );
};

export default CardLoader;
```

#### 效果如下

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce93f19c94cc41f7a81a0f34b6cf6be6~tplv-k3u1fbpfcp-watermark.image?)

## alias 别名
在`tsconfig.paths.json`文件下配置

### tsconfig.paths.json
```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "strict": false,
    "paths": { // 指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样
      "@/global/*": [
        "src/global/*"
      ],
      "@/helpers/*": [
        "src/helpers/*"
      ],
      "@/components/*": [
        "src/components/*"
      ],
      "@/store/*": [
        "src/store/*"
      ],
      "@/hooks/*": [
        "src/hooks/*"
      ],
      "@/images/*": [
        "src/images/*"
      ],
      "@/const/*": [
        "src/const/*"
      ],
      "@/type/*": [
        "src/type/*"
      ],
      "@/pages/*": [
        "src/pages/*"
      ],
    },
    "jsx": "react"
  }
}
```
### tsconfig.json

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d943a70a927d4e48a867adf70bc9f6a2~tplv-k3u1fbpfcp-watermark.image?)

## 内置分页列表滚动

既然是滚动分页，我们就需要监听滑动是否触底，触底就进行`pageNum+1`并传入到请求中，然后请求新数据；并且在请求过程中需要显示`加载中...`，没有更多数据就显示`没有更多了`；接下来我们就先实现`触底hook`

### `useReachBottom` 滚动触底hook
```js
/*
 * @Description: listen reach bottom
 */

import { useEffect } from "react";
import debounce from 'lodash/debounce';

/**
 * 
 * @param f 触底执行的函数
 * @param ifStop 是否停止
 */

export default function useReachBottom(f: Function, ifStop?: boolean) {

    useEffect(() => {
        const handleScroll = debounce(listenScroll, 250);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [f]);

    const listenScroll = () => {
        const preLord = 20; // 指定提前加载的距离

        if (ifStop) {
            return;
        }

        const scrollHeight = document.body.clientHeight;
        const clientHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        if (scrollHeight - (clientHeight + scrollTop) <= preLord) {
            try {
                f();
            } catch (err) {
                console.log('bottom-fetch error', err);
            } finally {
                console.log('reach bottom');
            }
        }
    };
};
```

### `useMockPagination` api分页hook
```js
import { mockAxios } from "@/helpers/axios";
import RequestProps, { RequestTuple } from "@/type/request";
import get from 'lodash/get';
import useAxiosMethods from "./useAxiosMethods";
import { useRef, useState } from "react";
import { toast } from "@/components/toast";
import { useRequest } from "ahooks";

/**
 * 
 * @param request method:请求方式，url：请求路径
 * @param params data: 接口请求参数，config：ahook的useRequest的第二个参数
 * @returns {
 *  list: [], 分页数据
 *  clear:()=>void, 清除list数据，并回到初始pageConfig
 *  getList:() => void, 继续请求
 *  ifDone, 是否完成所有数据加载
 *  initList, 初始化
 *}
 */

export default function useMockPagination<T>(request: RequestTuple, params: RequestProps<T>) {
    const { method, url } = request;
    const { data = {}, config = {} } = params;

    const [list, setList] = useState<any[]>([]);
    const pageConfig = useRef({
        pageSize: 10,
        pageNum: 1,
        ifDone: false
    });

    const controller = useAxiosMethods(mockAxios);

    if (!controller[method]) throw new Error('当前请求方法仅支持get/post/put/delete');

    // 请求接口的函数
    const http: () => any = async () => {

        if (pageConfig.current.ifDone) return;

        const res = await controller[method](url, {
            ...data,
            pageSize: pageConfig.current.pageSize,
            pageNum: pageConfig.current.pageNum,
        });

        const returnCode = get(res, 'data.code', '');
        const returnDesc = get(res, 'data.desc', '');

        // 判断接口是否正常
        if (returnCode !== '0000') return toast(returnDesc, 2000);

        const returnData = get(res, 'data.data', {}) as any;

        // 此处的 rows，total 根据后端接口定义的字段来取
        const { rows, total } = returnData as any;

        // 核心代码
        setList(i => {
            const current = [...i, ...rows];

            // 如果当前已经渲染的条数 > 总条数 就停止
            if (current.length >= total) {
                pageConfig.current.ifDone = true;
            }
            pageConfig.current.pageNum += 1;

            return current;
        });

    };

    const alibabaHook = useRequest(http, config);

    const clear = () => {
        setList(() => {
            pageConfig.current.pageNum = 1;
            pageConfig.current.ifDone = false;
            return [];
        });
    };

    const initList = () => {
        clear();
        setTimeout(http, 0);
    };

    return {
        ...alibabaHook,
        list,
        clear,
        getList: http,
        ifDone: pageConfig.current.ifDone,
        initList
    };
}
```
### `useListPages` 列表页使用分页的hook
```js
import useMockPagination from "./useMockPagination";
import useReachBottom from "./useReachBottom";
import { RequestTuple } from "@/type/request";


export default function useListPages(request: RequestTuple, params = {}) {
    const { loading, list, initList, getList, ifDone } = useMockPagination(request, params);
    
    // 触底后继续请求
    useReachBottom(getList);

    return { loading, list, ifDone };
}
```

### 页面中使用
```js
import { FC } from 'react';
import ApiCollector from '@/const/apis';
import useListPages from '@/hooks/useListPages';
import FetchTips from '@/components/fetchTips';
import Card from './card';
import Layout from '@/components/layout';
import ListLoader from '@/components/skeleton/listLoader';
import styles from './index.module.less';

const List: FC = () => {
    const { loading, list, ifDone } = useListPages(ApiCollector.getList, {});

    // 如果请求还在加载，则渲染骨架屏
    if (loading) return <ListLoader />;

    return <Layout title='分页列表'>
        <div className={styles.list}>
            {
                list?.map((li, index) => (
                    <div className={styles.item} key={index}>
                        <Card li={li} />
                    </div>
                ))
            }
            {/* 底部加载时的请求提示 */}
            <FetchTips ifDone={ifDone} />
        </div>
    </Layout>;

};

export default List;
```

## 部署
[部署到github](https://create-react-app.dev/docs/deployment#github-pages)

## 未来
会持续更新一些通用的好用的组件

## 总结

[项目github地址](https://github.com/talktao/talk-react-app)

## 关于我

如果对你有帮助送我一颗小星星❤

转载请联系作者！








