import { FC, useRef } from 'react';
import ApiCollector from '@/const/apis';
import Layout from '@/components/layout';
import ListLoader from '@/components/skeleton/listLoader';
import styles from './index.module.less';
import Card from '@/components/card';
import useMockRequest from '@/hooks/useMockRequest';
import { useVirtualList } from 'ahooks';

const VirtuaList: FC = () => {

    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const { data, error, loading } = useMockRequest<any>(ApiCollector.getVirtuaList, {});

    const { list: virtuaList = [] } = data;

    const [list] = useVirtualList(virtuaList, {
        containerTarget: containerRef,
        wrapperTarget: wrapperRef,
        itemHeight: 120,
        overscan: 10,
    });

    console.log(list, 'list');

    // 如果请求还在加载，则渲染骨架屏
    if (loading) return <ListLoader />;

    return <Layout title='虚拟列表'>
        <div ref={containerRef} style={{ height: '100vh', overflow: 'auto', }}>
            <div ref={wrapperRef} className={styles.list}>
                {
                    list?.map((li, index) => (
                        <div className={styles.item} key={index}>
                            <Card li={li.data} index={li.index} />
                        </div>
                    ))
                }
            </div>
        </div>
    </Layout>;

};

export default VirtuaList;