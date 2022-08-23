// Templates
export const templates = {
  get blogPost() {
    const template = document.createElement('tempalte');

    template.innerHTML = /*html*/`
      <div class="blog-post">
        <div class="blog-post_thumbnail">
            <slot name="thumbnail"><img src="./assets/no-image.png" alt="No Image"></slot>
        </div>
        <div class="blog-post_content">
          <slot name="title"><h2>Title</h2></slot>
          <slot name="description"><p>Description</p></slot>
          <slot name="link"><a href="/" target="_blank">Link to Article</a></slot>
        </div>
      </div>
    `;

    return template;
  }
}