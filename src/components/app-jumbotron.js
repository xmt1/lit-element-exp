import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from '../styles/shared-styles.js';


import '@polymer/paper-button';

// Extend the LitElement base class
class AppJumbotron extends LitElement {

  static get properties() {
    return {
      jumbotronTitle: { type: String },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        header {
          height: 160px;
          background-color: var(--app-default-background-color, #3F51B5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          color: #fff;
        }

        a {
          color: #fff;
        }

        paper-button {
          text-transform: none;
          background-color: var(--app-accent-color, #FF4081);
          margin: 24px 0;
        }
      `
    ];
  }

  render() {
    return html`
    <header>
      <h1>${this.jumbotronTitle}</h1>
      <a href="https://lit-element.polymer-project.org/guide">
        <paper-button raised>Guide</paper-button>
      </a>
    </header>
    `;
  }

  constructor() {
    super();
    this.jumbotronTitle = 'LitElement Reference';
  }
}

customElements.define('app-jumbotron', AppJumbotron);

