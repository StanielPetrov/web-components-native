// Native JS Web Components

// Custom Element with open shadow root
class CustomElement extends HTMLElement {
  constructor() {
    super();

    // Use Shadow Root when you want to isolate content and style from the rest of the document.
    const shadowRoot = this.attachShadow({
      mode: "open", // Can be accessed from the outside
    });

    // The /*html*/ comment is used only for HTML highlighting inside template strings
    shadowRoot.innerHTML = /*html*/ `
      <div class="custom-element">
        <h2 style="margin-top: 0;">Custom Element - Open Shadow Root</h2>
      </div>
    `;
  }
}

// Custom Element with closed shadow root
class CustomElementClosed extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: "closed", // Cannot be accessed from the outside
    });

    shadowRoot.innerHTML = /*html*/ `
      <div class="custom-element">
        <h2 style="margin-top: 0;">Custom Element - Closed Shadow Root</h2>
      </div>
    `;
  }
}

// Custom Element with no shadow root
class CustomElementNoRoot extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /*html*/ `
      <div class="custom-element">
        <h2 style="margin-top: 0;">Custom Element - No Shadow Root</h2>
      </div>
    `;
  }
}

// Custom Element with lifecycle callbacks
class CustomElementLifecycles extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: "closed",
    });

    shadowRoot.innerHTML = /*html*/ `
      <div class="custom-element-lifecycles" style="display: flex; align-items: center; gap: 1rem;">
        <h2 style="margin: 0;">Custom Element - Lyfecycles</h2>
        <button onclick="document.querySelector('custom-element-lifecycles').remove()">Unmount Element</button>
        <input type="text" placeholder="Change title attribute" onchange="(function(e){ e.preventDefault(); document.querySelector('custom-element-lifecycles').title = e.target.value === '' ? null : e.target.value; })(event)"/>
      </div>
    `;
  }

  // Used to add event listeners or do something in the beginning when the Custom Element is mounted
  connectedCallback() {
    console.log("--connectedCallback", this);
  }

  // Called when this custom element has been adopted, for example when you adopt this custom element from an iframe using the document.adoptNode() method.
  adoptedCallback() {
    console.log("--adopted", this);
  }

  // attributeChangedCallback() is called when some observed element attribute has changed (when attribute is set, removed or the value itself is changed).

  // You should explicitly specify which attribute should trigger  attributeChangedCallback().
  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("--attributeChangedCallback");
    console.table({
      "attribute-name": name,
      "old-value": oldValue,
      "new-value": newValue,
    });
  }

  // Used to remove event listeners or do something at the end when the Custom Element is unmounted
  disconnectedCallback() {
    console.log("--disconnectedCallback", this);
  }
}

// Customized Built-In Element that extends from HTMLButtonElement
class CustomButton extends HTMLButtonElement {
  constructor() {
    super();

    this.innerText = "Custom Button";
    this.onclick = (() => {
      this.style.backgroundColor = '#900';
      this.style.color = '#fff';
    });
  }
}

// The tag name of each Custom Component must follow the kebab case naming convention, with a minimum of two words connected with a dash.
customElements.define("custom-element", CustomElement);
customElements.define("custom-element-closed", CustomElementClosed);
customElements.define("custom-element-no-root", CustomElementNoRoot);
customElements.define("custom-element-lifecycles", CustomElementLifecycles);

// When defining a custom built-in elements you should add a third argument options object and specify which HTML element you are extending (for this example we are extending a button)
// NOTE: Safari - Doesn't support customized built-in elements.
customElements.define("custom-button", CustomButton, { extends: "button" });

{
  // Trying to access the open and closed shadow roots
  console.log("--open", document.querySelector("custom-element").shadowRoot);
  console.log("--closed", document.querySelector("custom-element-closed").shadowRoot);
}
