import { LitElement, html, css } from 'lit-element';
import '../components/app-card';
import { SharedStyles } from '../styles/shared-styles.js';

class ViewDashboard extends LitElement {

  static get properties() {
    return {};
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        app-card {
          margin: 24px 0;
        }
      `
    ];
  }

  render(){
    return html`
      <div class="cards">
        <app-card link="https://lit-element.polymer-project.org/guide/lifecycle">
          <span slot="card-title">Basic Examples</span>
          <span slot="card-body">Starter template and basic examples based on the LitElement documentation</span>
        </app-card>
        <app-card link="https://lit-element.polymer-project.org/guide/lifecycle">
          <span slot="card-title">Another Card</span>
          <span slot="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima nesciunt odit fugit, eum ipsam!</span>
        </app-card>
        <app-card link="https://lit-element.polymer-project.org/guide/lifecycle">
          <span slot="card-title">Last Card... For Now</span>
          <span slot="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima nesciunt odit fugit, eum ipsam!</span>
        </app-card>
      </div>
    `;
  }

  constructor() {
    super();
  }

  
}

customElements.define('view-dashboard', ViewDashboard);

