import { FC, useEffect, useState } from "react";
import { tabbarProps } from "@/type/tabbar";
import { useNavigate, useLocation } from "react-router-dom";
import { tabbarConfig } from './config';
import style from './index.module.less';

type tabbarType = {
    path: string;
};

const Tabbar: FC<tabbarType> = ({ path }) => {

    const [currentRoute, setCurrentRoute] = useState(path);
    const navigate = useNavigate();

    const clickTab = (tab: tabbarProps) => {
        setCurrentRoute(tab.route);
    };

    useEffect(() => {
        navigate(currentRoute);
    }, [currentRoute]);

    return <div className={style.tabbar}>
        {
            tabbarConfig.map(tab => {
                return <div key={tab.name} className={style.tabbarItem} onClick={() => clickTab(tab)}>
                    <img src={currentRoute === tab.route ? tab.active : tab.icon} alt="" />
                    <div className={currentRoute === tab.route ? style.active : ''}>{tab.name}</div>
                </div>;
            })
        }
    </div>;
};

export default Tabbar;