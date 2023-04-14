import { routesUrl } from "@/const/routes";
import {
    Navigate,
    RouteObject,
    useParams,
    Outlet,
    useLoaderData,
    useRouteError,
    isRouteErrorResponse,
} from "react-router-dom";
import React, { Suspense } from "react";
import axios from "./helpers/axios";
const Home = React.lazy(() => import('@/pages/home/index'));
const Login = React.lazy(() => import('@/pages/login/index'));
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function News() {
    return <div>home news</div>
}

function Message() {
    return <div>
        home message
        <Outlet />
    </div>
}

function Demo() {
    console.log('redirect to login')
    return <Navigate to={routesUrl.login} />
}


function Detail() {
    const { id, title, content } = useParams()
    let team = useLoaderData();
    debugger
    return <div>home message detail
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
    </div>
}
function RootBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>This page doesn't exist!</div>;
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this</div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div>🫖</div>;
        }
    }

    return <div>Something went wrong</div>;
}


// 路由映射表
const routes: RouteObject[] = [
    {
        path: '/home',
        element: <Home />,
        errorElement: <RootBoundary />,
        children: [
            { path: 'news', element: <News /> },
            {
                path: 'message',
                element: <Message />,
                children: [
                    // 声明接收参数
                    {
                        path: 'detail/:id/:title/:content',
                        element: <Detail />,
                        loader: async ({ request, params }) => {
                            debugger
                            console.log(params)
                            const data = await axios.get('http://localhost:9000/hello')
                            // const data = await axios.get('https://sspmwx.scms.sztv.com.cn/api/com/article/getArticleList?page=1&pageSize=12&tenantId=ssp&specialtype=1&extendtype=1&catalogId=16176&banner=0')
                            debugger
                            return data
                        },
                    }
                ]
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    // 路由重定向
    {
        path: '/',
        element: <Demo />,
        errorElement: <RootBoundary />
    }
]

const router = createBrowserRouter(routes)


function App() {
    // const route = useRoutes(routes);
    return (
        <Suspense fallback={<div />} >
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;

