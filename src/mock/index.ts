import Login from './login';
import Mock from 'mockjs';
const allMockData = {
  ...Login
}

// mock请求拦截
Object.keys(allMockData).forEach(url => {
  const reg = new RegExp(url);
  const template = allMockData[url];
  Mock.mock(reg, ({url}) => {
    console.log(`%c收到mock请求: ${url}`, 'color: #fff; font-size: 13px; background: pink; padding: 3px');
    console.log('返回mock数据', template)
    return template
  });
});

export default allMockData