import { makeAutoObservable } from "mobx";

class MagicStore {

    // 定义仓库数据
    magicText = '';

    constructor() {
        // 响应式处理
        makeAutoObservable(this);
    }

    triggerMagic = (tag: string) => {
        this.magicText = tag;
    };
}

const magicStore = new MagicStore();

export default magicStore;
