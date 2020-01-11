import {Base} from "./Base";
import {html} from "lit-html";
import {css} from "lit-element";


let rootStore, commonStore;

export default class HelloWorld extends Base {
  static properties = {
    msg: {type: String}
  };

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
      ${this.style()}
      <div class="hello">
        <h1>${this.msg}</h1>
        <h3>Used Components</h3>
        <ul>
          <li><a href="https://www.npmjs.com/package/lit-element" target="_blank" rel="noopener">LitElement</a></li>
          <li><a href="https://www.npmjs.com/package/mobx" target="_blank" rel="noopener">MobX</a></li>
          <li><a href="https://www.npmjs.com/package/slick-router" target="_blank" rel="noopener">Slick Router</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
          <li><a href="https://lit-element.polymer-project.org/guide" target="_blank" rel="noopener">LitElement Docs</a></li>
          <li><a href="https://mobx.js.org/README.html" target="_blank" rel="noopener">MobX Docs</a></li>
          <li><a href="https://github.com/blikblum/slick-router#readme" target="_blank" rel="noopener">Slick Router Docs</a></li>
        </ul>
        <h3>Basic Store Example</h3>
        <h4>Observable</h4>
        ${commonStore.counter}
        <h4>Actions</h4>
        <button @click="${() => this.handleCount(false)}">- 1</button>
        <button @click="${() => this.handleCount(true)}">+ 1</button>
        <h4>Computed Property</h4>
        Is counter positive: <b>${commonStore.isCounterPositive}</b>    
    </div>`;
  }

  style() {
    return html`
      <style>
        h3 {
          margin: 40px 0 25px 0;
        }
        h4 {
          margin: 25px 0 10px 0;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: inline-block;
          margin: 0 10px;
        }
        a {
          color: #2196f3;
        }     
        button{
        margin: 0 10px;
        }   
      </style>
      `;
  }
}

customElements.define("hello-world", HelloWorld);