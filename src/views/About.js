import {html} from "lit-html";
import {Base} from "../components/Base";

let rootStore, commonStore;

class AboutView extends Base {

  connectedCallback() {
    super.connectedCallback();
    rootStore = this.context.stores;
    commonStore = rootStore.commonStore;
  }


  render() {
    return html`
    <div class="about">
    <img src="https://i.imgur.com/J7yNMuX.png" alt="LitElement Logo">
      <h1>This is an about page</h1>
      <h4>Store Counter</h4>
      ${commonStore.counter}
    </div>
    `;
  }
}

customElements.define("about-view", AboutView);

