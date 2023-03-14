import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map(item => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" >
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`}).join("");

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;


	const lightbox = new SimpleLightbox('.gallery a', { caption: true, 
    captionSelector: 'img[alt]', captionType: 'attr', captionsData: 
    'alt', captionPosition: 'bottom', captionDelay: 250 });

    console.log(galleryItems);