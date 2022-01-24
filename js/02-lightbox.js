import { galleryItems } from './gallery-items.js';
// Change code below this line

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

const gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`});

function onClickEvent(e) {
    e.preventDefault();
    
    if (e.target.nodeName !=='IMG') {
        return;
    }
    const imageLink = e.target.dataset.source;
    const imageAlt = e.target.dataset.alt;
    const imageToShow = `<img src="${imageLink}", alt="${imageAlt}"/>`;

    const lightbox = $('.gallery a').SimpleLightbox(imageToShow);
    lightbox.next(); // Next Image
}; 



