import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryMark = createGalleryMark(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMark);
galleryList.addEventListener('click', onClickEvent);

function createGalleryMark (galleryItems) {
    return galleryItems.map(({preview, original,  description}) => {
    return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;

    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`});
function onClickEvent(e){
    e.preventDefault();
    
lightbox.next(); // Next Image
}


