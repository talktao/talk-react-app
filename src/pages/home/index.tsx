import ApiCollector from '@/const/apis';
import render from '@/helpers/render';
import useCMSRequest from '@/hooks/useCMSRequest';
import { Link, Outlet } from 'react-router-dom';
import './index.less';
import { observer } from 'mobx-react-lite';
import counterStore from '@/store/count';
import { useToggle } from 'ahooks';

interface Article {
    id: number
    name: string
}

function App() {
    const catalogHttpController = useCMSRequest<Article[]>(ApiCollector.getCmsCatalogList, {
        data: {
            tenantId: 'ssp',
            appCode: '510'
        },
        config: {
            refreshDeps: [counterStore.count],
            // retryCount: 3
        }
    });
    const { data, error, loading } = catalogHttpController;
    const [state, { toggle, setLeft, setRight }] = useToggle();

    return <div className="app">
        <div onClick={counterStore.increment}>测试store {counterStore.count}</div>
        <div onClick={catalogHttpController.run}>点击我重新发出请求</div>
        <div>
            {
                loading && 'http is fetching...'
            }
            {
                data.map(i => {
                    return <div key={i.id}>{i.id} - {i.name}</div>
                })
            }
        </div>
        <div>
            <p>Effects：{`${state}`}</p>
            <p>
                <button type="button" onClick={toggle}>
                    Toggle
                </button>
                <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
                    Toggle False
                </button>
                <button type="button" onClick={setRight}>
                    Toggle True
                </button>
            </p>
        </div>
        <Outlet />
        <Link to="/login">login</Link>
    </div>
}

export default observer(App);



if (process.env.NODE_ENV === 'development') {

} else {
    render(<App />);
}


