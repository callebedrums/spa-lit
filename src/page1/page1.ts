import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// add the `?inline` query parameter to the import to prevent the CSS from being extracted
// import myElementStyle from "./app.style.scss?inline";

@customElement("my-app-page1")
export class MyAppPage1 extends LitElement {
  @property({ type: String }) name = "";

  render() {
    return html` <h1>Page 1. Hello ${this.name}!</h1> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app-page1": MyAppPage1;
  }
}
