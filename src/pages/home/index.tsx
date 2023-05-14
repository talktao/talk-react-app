import ApiCollector from '@/const/apis';
import render from '@/helpers/render';
import useMockRequest from '@/hooks/useMockRequest';
import { Link, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import counterStore from '@/store/count';
import { BulletList } from 'react-content-loader';
import Logo from '@/images/logo.png';
import styles from './index.module.less';
import Tabbar from '@/components/tabbar';
import { routesUrl } from '@/const/routes';
import get from 'lodash/get';
import HomeLoader from '@/components/skeleton/homeLoader';

interface List {
    id: number;
    content: string;
}

interface Data {
    title: string;
    subTitle: string;
    list: List[];
}

function Home() {
    const { data, error, loading } = useMockRequest<Data>(ApiCollector.getHome, {});

    if (loading) {
        return <div className={styles.loader}>
            <HomeLoader />
            <Tabbar path={routesUrl.home} />
        </div>;
    }

    return <div className={styles.home}>
        <div className={styles.content}>
            <div className={styles.title}>
                <img src={Logo} alt="" />
                {get(data, 'title', '')}
            </div>
            <div className={styles.subTitle}>{get(data, 'subTitle', '')}</div>
            <div className={styles.list}>
                {
                    get(data, 'list', []).map(item => (
                        <div className={styles.item} key={item.id}>
                            <span>{item.content}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <Tabbar path={routesUrl.home} />
    </div>;
}

export default observer(Home);


// if (process.env.NODE_ENV === 'development') {

// } else {
//     render(<Home />);
// }


