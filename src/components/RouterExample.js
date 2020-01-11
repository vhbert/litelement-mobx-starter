import {Base} from "./Base";
import {html} from "lit-html";
import {property} from "lit-element";

export default class RouterExample extends Base {
  @property({type: String}) entry = '';

  handleNavigation = () => {
    this.dispatchEvent(new CustomEvent('toAbout', {detail: {entry: this.entry}}));
  };
  handleInput = (e) => {
    this.entry = e.target.value;
  };

  render() {
    return html`
    <div>
      <h3>Router Property Example</h3>
      <input id="pass-input" @input="${this.handleInput}" type="text" placeholder="Enter a title" value="${this.entry}">
      <button @click="${this.handleNavigation}">Navigate</button> 
      <h5>Input will be passed to the about page</h5>
    </div>`;
  }
}

customElements.define('router-example', RouterExample);