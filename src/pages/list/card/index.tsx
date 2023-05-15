import { FC } from "react";
import styles from './index.module.less';

interface LiProps {
    id: number;
    title: string;
    descript: string;
    image: string;
    name: string;
}

type CardType = {
    li: LiProps,
};

const Card: FC<CardType> = ({ li }) => {

    return <div className={styles.card}>
        <img src={li.image} alt="" />
        <div className={styles.info}>
            <p className={styles.name}>{li.name}</p>
            <p className={styles.descript}>{li.descript}</p>
        </div>
    </div>;
};

export default Card;