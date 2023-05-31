import { FC } from "react";
import styles from './index.module.less';
import { http2https } from "@/helpers/http2https";
import { toast } from "../toast";

interface LiProps {
    id: number;
    title: string;
    descript: string;
    image: string;
    name: string;
}

type CardType = {
    li: LiProps,
    index?: number;
};

const Card: FC<CardType> = ({ li, index = 0 }) => {

    return <div className={styles.card} onClick={() => toast(`我是第${index + 1}个`, 500)}>
        <img src={http2https(li.image)} loading="lazy" alt="" />
        <div className={styles.info}>
            <p className={styles.name}>{li.name}</p>
            <p className={styles.descript}>{li.descript}</p>
        </div>
    </div>;
};

export default Card;