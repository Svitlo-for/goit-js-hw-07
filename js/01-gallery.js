import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
console.log(galleryBox);

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