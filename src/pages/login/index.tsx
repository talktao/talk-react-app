
import Hello from '@/components/hello';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './index.module.less';

export default function Login() {
    const p = [
        { id: 1, title: 'message1', content: '努力学习' },
        { id: 2, title: 'message2', content: '学习React' },
        { id: 3, title: 'message3', content: '前端工程师' },
    ]
    const navigate = useNavigate();
    const go = () => {
        navigate('/home/message/detail/1/2/3', {
            // replace: false,
            state: { sss: 4 },
            relative: 'path'
        })
    }
    return <div className={style.Login}>
        <Hello />
        <Link to="/home">Go to Home</Link>
        <NavLink to="/home/news">Go to Home</NavLink>
        <NavLink to="/home/message">Go to Home</NavLink>

        {
            p.map(m => {
                return (
                    <li key={m.id}>
                        {/* 1. 传递 params 参数，在路径后面用 / 进行拼接 */}
                        <Link to={`/home/message/detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                    </li>
                )
            })
        }
        <div onClick={go}>试试看编程示导航</div>
    </div>
}