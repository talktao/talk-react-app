import { FC, ReactNode, useState } from 'react';
import CardLoader from '../cardLoader';
import React from 'react';

const ListLoader: FC = () => {

    // 卡片高度
    const [cardHeight, setCardHeight] = useState(100);

    // 获取当前设备高度
    let screenHeight = window.screen.height;

    // 根据页面高度获取可渲染CardLoader的数量
    let renderCardLoaderNum = Math.floor(screenHeight / cardHeight);

    const loader = () => {
        let data = [] as ReactNode[];

        for (let i = 0; i < renderCardLoaderNum; i++) {
            data.push(<CardLoader height={cardHeight} />);
        }
        return data.map((item, index) => <div key={index}>{item}</div>);
    };

    return <React.Fragment>
        {loader()}
    </React.Fragment>;
};

export default ListLoader;