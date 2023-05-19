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