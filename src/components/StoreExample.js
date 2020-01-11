import {Base} from "./Base";
import {html} from "lit-html";
import {property} from "lit-element";

let rootStore, commonStore;

export default class StoreExample extends Base {
  @property({type: String}) entry = '';

  connectedCallback() {
    super.connectedCallback();
    rootStore = this.context.stores;
    commonStore = rootStore.commonStore;
  }

  handleCount = (countUp) => {
    if (countUp) {
      commonStore.countUp();
    } else {
      commonStore.countDown();
    }
  };

  render() {
    return html`
    <div>
      <h3>Basic Store Example</h3>
      <h4>Observable</h4>
      ${commonStore.counter}
      <h4>Actions</h4>
      <button @click="${() => this.handleCount(false)}">- 1</button>
      <button @click="${() => this.handleCount(true)}">+ 1</button>
      <h4>Computed Property</h4>
      Is counter positive: <b>${commonStore.isCounterPositive}</b> 
    </div>   
    `;
  }
}

customElements.define('store-example', StoreExample);