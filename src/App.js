import {Base} from "./components/Base";
import {html} from "lit-html";

export default class AppBase extends Base {
  static get properties() {
    return {
      stores: {type: Object, attribute: false}
    }
  };

  static providedContexts = {
    stores: {property: 'stores'}
  };

  render() {
    return html`
      <style>
          #app {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #0e335f;
          }
          
          #nav {
            padding: 30px;
          }
          
          #nav a {
            font-weight: bold;
            color: #0e335f;
          }
          
          #nav .active {
            color: #2196f3;
          }
      </style>
      <div id="app">
        <div id="nav" routerlinks>
          <a route="home" active-class="active" exact>Home</a> |
          <a route="about" active-class="active" exact>About</a>
        </div>
        <router-slot></router-slot>
      </div>
    `
  }
}

customElements.define('app-base', AppBase);
