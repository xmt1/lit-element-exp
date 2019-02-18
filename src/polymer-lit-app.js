import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';

import './components/app-nav.js';
import './components/app-jumbotron.js';
import '@polymer/iron-icons';
import { SharedStyles } from './styles/shared-styles.js';

/**
 * @customElement
 * @polymer
 */
class PolymerLitApp extends LitElement {
  static get properties() {
    return {
      _page: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        main {
          margin: 24px 0;
        }
      `
    ];
  }

  render() {
    return html`
      <app-nav></app-nav>
      <app-jumbotron></app-jumbotron>
      <main class="container">
        <view-dashboard></view-dashboard>
      </main>
    `;
  }
  

  constructor() {
    super();
  }

  firstUpdated() {
    installRouter((location) => this._locationChanged(location));
  }

  _locationChanged(location) {
    const path = window.decodeURIComponent(location.pathname);
    const page = path === '/' ? 'dashboard' : path.slice(1);
    this._loadPage(page);
  }

  _loadPage(page) {
    switch(page) {
      case 'dashboard':
        import('./views/view-dashboard.js').then((module) => {
          // Put code in here that you want to run every time when
          // navigating to view1 after my-view1.js is loaded.
        });
        break;
      // case 'view2':
      //   import('../components/my-view2.js');
      //   break;
      // case 'view3':
      //   import('../components/my-view3.js');
      //   break;
      // default:
      //   page = 'view404';
      //   import('../components/my-view404.js');
    }

    this._page = page;
  }

  
}

window.customElements.define('polymer-lit-app', PolymerLitApp);
