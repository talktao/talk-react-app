import { FC } from 'react';
import ApiCollector from '@/const/apis';
import useListPages from '@/hooks/useListPages';
import FetchTips from '@/components/fetchTips';
import styles from './index.module.less';
import Card from './card';
import { ScrollRestoration } from 'react-router-dom';
import Layout from '@/components/layout';

const List: FC = () => {

    const { loading, list, ifDone } = useListPages(ApiCollector.getList, {});


    return <Layout title='分页列表'>
        <div className={styles.list}>
            <ScrollRestoration getKey={(location, matches) => location.pathname} />
            {
                list?.map((li, index) => (
                    <div className={styles.item} key={index}>
                        <Card li={li} loading={loading} />
                    </div>
                ))
            }
            {list.length !== 0 && <FetchTips ifDone={ifDone} />}
        </div>
    </Layout>;

};

export default List;