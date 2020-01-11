import {render, html} from 'lit-html';
import {createRouter} from "./router";
import RootStore from "./store/rootStore";
import AppBase from "./App";

const stores = new RootStore();

render(
  html`<app-base .stores=${stores}></app-base>`,
  document.getElementById('app')
);

const router = createRouter("router-slot");
router.listen();


registerSW();

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js').catch();
    } catch {
      console.log("Serviceworker init has failed");
    }
  } else {
    console.log("No serviceworker support found!");
  }
}
