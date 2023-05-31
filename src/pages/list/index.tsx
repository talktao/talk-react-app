import { FC } from 'react';
import ApiCollector from '@/const/apis';
import useListPages from '@/hooks/useListPages';
import FetchTips from '@/components/fetchTips';
import Layout from '@/components/layout';
import ListLoader from '@/components/skeleton/listLoader';
import styles from './index.module.less';
import Card from '@/components/card';

const List: FC = () => {
    const { loading, list, ifDone } = useListPages(ApiCollector.getList, {});

    // 如果请求还在加载，则渲染骨架屏
    if (loading) return <ListLoader />;

    return <Layout title='分页列表'>
        <div className={styles.list}>
            {
                list?.map((li, index) => (
                    <div className={styles.item} key={index}>
                        <Card li={li} />
                    </div>
                ))
            }
            {/* 底部加载时的请求提示 */}
            <FetchTips ifDone={ifDone} />
        </div>
    </Layout>;

};

export default List;