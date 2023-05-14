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
const Home = React.lazy(() => import('@/pages/home/index'));
const My = React.lazy(() => import('@/pages/my/index'));
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

function Demo() {
    console.log('redirect to home');
    return <Navigate to={routesUrl.home} />;
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
    },
    {
        path: '/my',
        element: <My />
    },

    // 路由重定向
    {
        path: '/',
        element: <Demo />,
        errorElement: <RootBoundary />
    }
];

const router = createHashRouter(routes);


function App() {
    // const route = useRoutes(routes);
    return (
        <Suspense fallback={<div />} >
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;

