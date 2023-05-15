import { FC } from 'react';
import ApiCollector from '@/const/apis';
import useMockRequest from '@/hooks/useMockRequest';
import Logo from '@/images/logo.png';
import styles from './index.module.less';
import Tabbar from '@/components/tabbar';
import { routesUrl } from '@/const/routes';
import get from 'lodash/get';
import HomeLoader from '@/components/skeleton/homeLoader';
import { useNavigate } from 'react-router';

interface List {
    id: number;
    content: string;
}

interface Data {
    title: string;
    subTitle: string;
    list: List[];
}

const Home: FC = () => {

    const navigate = useNavigate();

    const { data, error, loading } = useMockRequest<Data>(ApiCollector.getHome, {});

    const deep = (id) => {

        if (id === 9) return navigate('/list');
    };

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
                        <div className={styles.item} key={item.id} onClick={() => deep(item.id)}>
                            <span>{item.content}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <Tabbar path={routesUrl.home} />
    </div>;
};

export default Home;


// if (process.env.NODE_ENV === 'development') {

// } else {
//     render(<Home />);
// }


