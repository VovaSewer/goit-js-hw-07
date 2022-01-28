import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
const galleryMark = createGalleryMark(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMark);
galleryList.addEventListener('click', onClickEvent);

function createGalleryMark (galleryItems) {
    return galleryItems.map(({preview, original,  description}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source= "${original}"
        alt= "${description}"
        />
    </a>
    </div>`;

    }).join('');
}

function onClickEvent(e){
    e.preventDefault();
    
    if (e.target.nodeName !=='IMG') {
        return;
    }
    
    const imageLink = e.target.dataset.source;
    const imageAlt = e.target.dataset.alt;
    const imageToShow = `<img src="${imageLink}", alt="${imageAlt}"/>`;

    // console.log(imageLink);
    
    const instance = basicLightbox.create(imageToShow);
    instance.show()
}