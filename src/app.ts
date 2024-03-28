import { LitElement, unsafeCSS, html, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

// add the `?inline` query parameter to the import to prevent the CSS from being extracted
import myElementStyle from "./app.style.scss?inline";
import { Router } from "@vaadin/router";

@customElement("my-app")
export class MyApp extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  // @property()
  // docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  // @property({ type: Number })
  // count = 0;

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const router = new Router(this.shadowRoot?.querySelector("#outlet"));

    router.setRoutes([
      {
        path: `/`,
        children: () => import("./routes").then((module) => module.routes),
      },
    ]);
  }

  render() {
    return html`
      <div class="app">
        <nav>
          <a href="/">Home</a>
          <a href="/page1">Page 1</a>
          <a href="/page2">Page 2</a>
        </nav>
        <div id="outlet"></div>
      </div>
    `;
  }

  static styles = unsafeCSS(myElementStyle);
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}
