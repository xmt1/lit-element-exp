import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from '../styles/shared-styles.js';
import '@polymer/iron-icon'


class AppNav extends LitElement {
  static get properties() {
    return {
      testProp: { type: String },
      navItems: { type: Array }
    };
  }

  constructor() {
    super();
    this.navItems = ['Dashboard', 'Resources', 'Examples']
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        nav {
          height: 64px;
          background-color: var(--app-dark-background-color, #303F9F);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
        }

        iron-icon {
          width: 36px;
          height: 36px;
          color: #fff;
        }

        ul li {
          color: #fff;
        }

        ul li:not(:last-child) {
          margin-right: 24px;
        }
      `
    ];
}

  render(){
    return html`
      <nav>
        <div>
          <a href="#" aria-label="Home Page">
            <iron-icon icon="accessibility"></iron-icon>
          </a>
        </div>
        <ul>
          ${this.navItems.map(i => html`<li><a href="#">${i}</a></li>`)}
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-nav', AppNav);

