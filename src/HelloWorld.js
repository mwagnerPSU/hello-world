import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      status: { type: String },
      counter: { type: Number },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    this.status = "Stat!";
    this.disabled = false;
  }

  __decrement() {
    if(this.counter > 0){
      this.counter -= 1;
      this.status = "State :(";
    }
    if(this.counter === 0){
      this.disabled = true;
    }
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <input type="text" value="Were Pen ${this.status}">
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement} ?disabled=${this.disabled}>decrement</button>
    `;
  }
}
