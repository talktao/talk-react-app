import styles from './index.module.less';

export default function FetchTips({ ifDone }) {

    return <div className={styles.fetchTips}> {ifDone ? '没有更多了' : `加载中...`} </div>;

}
