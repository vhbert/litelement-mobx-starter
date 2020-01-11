import CommonStore from './commonStore';


class RootStore {
  constructor() {
    this.commonStore = new CommonStore(this);
  }
}

export default RootStore;
