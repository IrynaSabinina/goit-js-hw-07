import { galleryItems } from "./gallery-items.js";
// import { SimpleLightbox } from "simplelightbox";
// import { SimpleLightbox } from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const images = galleryItems.map(({ preview, description, original }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});
const image = images.join(" ");

galleryRef.insertAdjacentHTML("afterbegin", image);
console.log(image);

const ligthbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDeay: "250",
});

console.log(galleryItems);
