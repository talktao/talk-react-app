import { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tabbarConfig } from './config';
import style from './index.module.less';

type tabbarType = {
    path: string;
};

const Tabbar: FC<tabbarType> = () => {

    const navigate = useNavigate();
    const loacation = useLocation();

    const tabbarList = useMemo(() => tabbarConfig.map(tab => (
        <div key={tab.name} className={style.tabbarItem} onClick={() => navigate(tab.route)}>
            <img src={loacation.pathname === tab.route ? tab.active : tab.icon} alt="" />
            <div className={loacation.pathname === tab.route ? style.active : ''}>{tab.name}</div>
        </div>
    )), [loacation.pathname]);

    return <div className={style.tabbar}>
        {tabbarList}
    </div>;
};

export default Tabbar;