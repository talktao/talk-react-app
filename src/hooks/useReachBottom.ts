/*
 * @Description: listen reach bottom
 */

import { useEffect } from "react";
import debounce from 'lodash/debounce';

export default function useReachBottom(f: Function, ifStop?: boolean) {
    const listenScroll = () => {
        const preLord = 20; // 指定提前加载的距离

        if (ifStop) {
            return;
        }

        const scrollHeight = document.body.clientHeight;
        const clientHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        if (scrollHeight - (clientHeight + scrollTop) <= preLord) {
            try {
                f();
            } catch (err) {
                console.log('bottom-fetch error', err);
            } finally {
                console.log('reach bottom');
            }
        }
    };

    useEffect(() => {
        const handleScroll = debounce(listenScroll, 250);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [f]);
}
