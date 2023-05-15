import { FC } from 'react';
import ApiCollector from '@/const/apis';
import useListPages from '@/hooks/useListPages';
import FetchTips from '@/components/fetchTips';
import styles from './index.module.less';
import Card from './card';

const List: FC = () => {

    const { list, ifDone } = useListPages(ApiCollector.getList, {});

    return <div className={styles.list}>
        {
            list.map((li, index) => (
                <div className={styles.item} key={index}>
                    <Card li={li} />
                </div>
            ))
        }
        {list.length !== 0 && <FetchTips ifDone={ifDone} />}
    </div>;
};

export default List;