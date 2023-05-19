import { routesUrl } from "@/const/routes";
import { useUpdate } from "ahooks";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";

function KeepAlive() {
    const componentList = useRef(new Map());
    const outLet = useOutlet();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const forceUpdate = useUpdate();

    useEffect(() => {

        // 如果路径时‘/’，则重定向到home页
        if (pathname === '/') return navigate(routesUrl.home);

        if (!componentList.current.has(pathname)) {
            componentList.current.set(pathname, outLet);
        }
        forceUpdate();

    }, [pathname]);

    return <div>
        {
            Array.from(componentList.current).map(([key, component]) =>
                <div key={key} style={{ display: pathname === key ? 'block' : 'none' }}>
                    {component}
                </div>
            )
        }
    </div>;
}

export default KeepAlive;