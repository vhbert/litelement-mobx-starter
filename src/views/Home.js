import {html} from "lit-html";
import {Base} from "../components/Base";
import HelloWorld from "../components/HelloWorld";
import RouterExample from "../components/RouterExample";
import StoreExample from "../components/StoreExample";


export default class HomeView extends Base {

  render() {
    return html`
    <div class="home">
      <img alt="LitElement logo" src="../assets/icon.png">
      <hello-world msg="Welcome to Your LitElement App"> </hello-world>
      <store-example></store-example>
      <router-example @toAbout="${(e) => {this.$router.transitionTo('about', {entry: e.detail.entry});}}"></router-example>
    </div>
    `;
  }
}

customElements.define("home-view", HomeView);