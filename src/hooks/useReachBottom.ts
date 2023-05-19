/*
 * @Description: listen reach bottom
 */

import { useEffect } from "react";
import debounce from 'lodash/debounce';
import { useLocation } from "react-router";

/**
 * 
 * @param f 触底执行的函数
 * @param ifStop 是否停止
 */

export default function useReachBottom(f: Function, ifStop?: boolean) {

    const { pathname } = useLocation();

    // 执行分页的路由
    const routePaginaion = ['/list'];

    useEffect(() => {

        // 如果当前路径不需要执行分页，强制停止
        if (!routePaginaion.includes(pathname)) return;

        const handleScroll = debounce(listenScroll, 250);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [f]);

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
};
