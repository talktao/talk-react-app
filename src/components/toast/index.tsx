import { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.less';

export default function Toast(props) {
    const { text, timeout } = props;
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, timeout);
    }, []);

    return show ? <div className="c-toast">{text}</div> : null;
}

export function toast(text,timeout){
    let tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);

    let props = {
        text : text,
        timeout
    }
    if(timeout){
        props.timeout = timeout;
    }
    const root = ReactDOM.createRoot(tempDiv);

    root.render(<Toast {...props} />);
}