import {html} from "lit-html";
import {Base} from "../components/Base";
import {property} from "lit-element";
import {withRouterLinks} from "slick-router/middlewares/router-links";

let rootStore, commonStore;

export default class AboutView extends Base {
  @property({type: String}) title;

  set $route(value) {
    this.title = value.params.entry;
  }
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
      ${this.title?html`
        <h4>${this.title}</h4>
      `:html``}
      <h4>Store Counter</h4>
      ${commonStore.counter}
    </div>
    `;
  }
}


customElements.define("about-view", AboutView);

