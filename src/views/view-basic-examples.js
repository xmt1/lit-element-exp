import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../styles/shared-styles.js';

class ViewBasicExamples extends LitElement {

  static get properties() {
    return {
      exampleProp: { type: String },
    };
  }

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

  render() {
    return html`
      <p>${this.exampleProp} works</p>
    `;
  }

  constructor() {
    super();
    this.exampleProp = this.tagName.toLowerCase();
  }

  
}

customElements.define('view-basic-examples', ViewBasicExamples);

