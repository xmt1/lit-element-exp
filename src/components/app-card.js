import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-button';

import { SharedStyles } from '../styles/shared-styles.js';

class AppCard extends LitElement {

  static get properties() {
    return {
      cardLink: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }
        .card {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
          padding: 10px 24px;
        }
        .card-body {
          margin: 24px 0;
        }
        paper-button {
          font-size: .88rem;
          margin: 0;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="card">
        <h2><slot name="card-title"></slot></h2>
        <div class="card-body">
          <p><slot name="card-body"></slot></p>
        </div>
        <div class="card-footer">
          <a href="${this.cardLink}">
            <paper-button>View</paper-button>
          </a>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.cardLink = this.getAttribute('link');
  }
    
}

customElements.define('app-card', AppCard);

