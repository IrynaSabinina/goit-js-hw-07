import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const images = galleryItems.map(({ preview, description, original }) => {
  const imgEl = document.createElement("img");
  imgEl.type = "img";
  imgEl.src = preview;
  imgEl.alt = description;

  return imgEl;
});
console.log(images);
galleryRef.append(...images);

galleryRef.addEventListener("click", onPicterClick);

function onPicterClick() {
  return (images.currentSrc = galleryItems.original);
}

// console.log(galleryRef);
console.log(galleryItems);
