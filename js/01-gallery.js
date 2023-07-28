import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const galleryFoto = galleryItems.map(url => `
<li class="gallery__item">
  <a class="gallery__link" href="${url.original}">
    <img
      class="gallery__image"
      src="${url.preview}"
      data-source="${url.original}"
      alt="${url.description}"
    />
  </a>
</li>
`).join("");

galleryBox.insertAdjacentHTML('beforeend', galleryFoto);
galleryBox.addEventListener("click", originalFoto);

function originalFoto(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) {
    return;
  }
  const src = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${src}" width="960">
`)

instance.show();
}

