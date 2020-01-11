import {html} from "lit-html";
import {Base} from "../components/Base";
import HelloWorld from "../components/HelloWorld";



export default class HomeView extends Base {

  render() {
    return html`
    <div class="home">
      <img alt="LitElement logo" src="../assets/icon.png">
      <hello-world msg="Welcome to Your LitElement App"> </hello-world>
    </div>
    `;
  }
}

customElements.define("home-view", HomeView);