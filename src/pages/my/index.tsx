
import Hello from '@/components/hello';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './index.module.less';
import { routesUrl } from '@/const/routes';
import Tabbar from '@/components/tabbar';

export default function My() {

    return <div className={style.my}>
        <Tabbar path={routesUrl.my} />
    </div>;
}