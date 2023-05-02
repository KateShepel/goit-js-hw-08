import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = makeGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function makeGallery(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image"
                     src="${preview}" 
                     alt="${description}"  
                />
            </a>`
    }
    ).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });


