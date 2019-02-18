// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Shared Styles import if your component is inheriting any styles
//import { SharedStyles } from '../styles/shared-styles.js';

// Extend the LitElement base class
class ExampleElement extends LitElement {

  static get properties() {
    return {
      exampleProp: { type: String },
    };
  }

  /* If you're using a styles getter, 'css' must be extended from 'lit-element' */
  static get styles() {
    return [
      //SharedStyles,
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

customElements.define('example-element', ExampleElement);

