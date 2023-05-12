import Home from '@/images/tabbar/home.svg';
import HomeActive from '@/images/tabbar/home-active.svg';
import My from '@/images/tabbar/my.svg';
import MyActive from '@/images/tabbar/my-active.svg';

export const tabbarConfig = [
    {
        name: '首页',
        icon: Home,
        active: HomeActive,
        route: '/home',
        title: '首页'
    },
    {
        name: '我的',
        icon: My,
        active: MyActive,
        route: '/my',
        title: '我的'
    }
];