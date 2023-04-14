import { makeAutoObservable } from "mobx";

class CounterStore {

    // 定义仓库数据
    count = 0

    constructor() {
        // 响应式处理
        makeAutoObservable(this)
    }

    // 定义行为 action
    increment = () => {
        this.count++
    }
    
    decrement = () => {
        this.count--
    }
}

const counterStore = new CounterStore();

export default counterStore;
