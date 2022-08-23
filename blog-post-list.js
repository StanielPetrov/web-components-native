export class BlogPostList extends HTMLElement {
  #posts = [];

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  set posts(value) {
    this.#posts = value;
    this.render();
  }

  get style() {
    return /*html*/`
      <style>
        :host {
          display: block;
        }

        :host * {
          box-sizing: border-box;
        }

        .blog-post-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 1fr;
          grid-gap: 1rem;
        }
      </style>
    `;
  }

  render() {
    this.shadow.innerHTML = /*html*/`
      ${this.style}
      <div class="blog-post-list">
        ${this.#posts.map(post => /*html*/`
          <blog-post
            title="${post.title}"
            description="${post.description}"
            link="${post.link}"
            thumbnail="${post.thumbnail}"
          ></blog-post>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('blog-post-list', BlogPostList);