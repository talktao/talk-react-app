import { makeAutoObservable } from "mobx";

class MagicStore {

    // 定义仓库数据
    magicText = '';

    constructor() {
        // 响应式处理
        makeAutoObservable(this);
    }

    // 修改magicText文本的函数
    triggerMagic = (tag: string) => {
        this.magicText = tag;
        console.log(this.magicText, 'this.magicText');

    };
}

const magicStore = new MagicStore();

export default magicStore;
