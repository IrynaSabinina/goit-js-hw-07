import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const images = galleryItems.map(({ preview, description, original }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
});
const image = images.join(" ");

galleryRef.insertAdjacentHTML("afterbegin", image);
console.log(image);

galleryRef.addEventListener("click", bigImg);

// const iiiiiEl = document.querySelector(".gallery__link");
// console.log(iiiiiEl);

function bigImg(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const big = event.target.dataset.source;
  console.log(big);
  // const alt = event.target.alt;
  // console.log(alt);

  const instance = basicLightbox.create(`
    <img src="${big}" width="800" height="600" alt="event.target.alt">
`);

  instance.show();
}
