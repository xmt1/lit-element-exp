import { LitElement, html, css } from 'lit-element';

import './components/app-nav.js';
import './components/app-jumbotron.js';
import './examples/docs-example.js';
import '@polymer/iron-icons';
import { SharedStyles } from './styles/shared-styles.js';

/**
 * @customElement
 * @polymer
 */
class PolymerLitApp extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }
  static get properties() {
    return {};
  }

  render() {
    return html`
      <app-nav></app-nav>
      <app-jumbotron></app-jumbotron>
      <main class="container">
        <docs-example></docs-example>
      </main>
    `;
  }
}

window.customElements.define('polymer-lit-app', PolymerLitApp);
