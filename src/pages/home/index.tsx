import ApiCollector from '@/const/apis';
import render from '@/helpers/render';
import useMockRequest from '@/hooks/useMockRequest';
import { Link, Outlet } from 'react-router-dom';
import './index.less';
import { observer } from 'mobx-react-lite';
import counterStore from '@/store/count';
import { BulletList } from 'react-content-loader';

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
    const homeHttpController = useMockRequest<Data>(ApiCollector.getHome, {});
    const { data, error, loading } = homeHttpController;

    if (loading) return <BulletList />;

    return <div className="app">
        <div className='title'>{data.title}</div>
        <div className='subTitle'>{data.subTitle}</div>
        {
            data.list.map(item => (
                <div className='item' key={item.id}>
                    <span>{item.id} - {item.content}</span>
                </div>
            ))
        }
    </div>;
}

export default observer(Home);


if (process.env.NODE_ENV === 'development') {

} else {
    render(<Home />);
}


