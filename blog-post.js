// Native JS Web Components using templates

class BlogPost extends HTMLElement {
  title = '';
  description = '';
  link = '';
  thumbnail = '';

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['title', 'description', 'link', 'thumbnail'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'title':
        this.title = newValue || 'No title';
        break;
      case 'description':
        this.description = newValue || '';
        break;
      case 'link':
        this.link = newValue || '/';
        break;
      case 'thumbnail':
        this.thumbnail = newValue || '';
        break;
    }

    this.render();
  }

  get style() {
    return /*html*/`
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
        }

        :host * {
          box-sizing: border-box;
        }

        .blog-post {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .blog-post_thumbnail {
          flex: 1;
        }

        .blog-post_thumbnail img {
          display: block;
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .blog-post_content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
        }

        .blog-post h2,
        ::slotted([slot="title"]) {
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0;
        }

        .blog-post a {
          padding: 0.5rem 1rem;
          margin-top: auto;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          background-color: black;
          border-radius: 10rem;
        }
      </style>
    `;
  }

  get template() {
    return /*html*/`
      ${this.style}
      <div class="blog-post">
        <div class="blog-post_thumbnail">
            <slot name="thumbnail"><img src="${this.thumbnail}" alt="${this.title}"></slot>
        </div>
        <div class="blog-post_content">
          <slot name="title"><h2>${this.title}</h2></slot>
          <slot name="description"><p>${this.description}</p></slot>
          <slot name="link"><a href="${this.link}" target="_blank">Learn More</a></slot>
        </div>
      </div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }
}

customElements.define("blog-post", BlogPost);