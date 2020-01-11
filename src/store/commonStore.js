import {observable, action, computed} from "mobx";

let rootStore;

class CommonStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable counter = 0;

  @action countUp() {
    this.counter++;
  }

  @action countDown() {
    this.counter--;
  }

  @computed get isCounterPositive() {
    return this.counter >= 0;
  }
}

export default CommonStore;