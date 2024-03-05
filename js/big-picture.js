import {isEscapeKey} from './utils.js';

const galleryContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
};

function openPictureModal (evt) {
  bigPictureContainer.classList.remove('hidden');
  // renderBigPicture();
  if (evt.target.closest('.picture')) {
    // getPictureData();
    console.log('click');
  }

  document.addEventListener('keydown', onDocumentKeydown);
}

function closePictureModal () {
  bigPictureContainer.classList.add('hidden');
  // clearBigPicture();

  document.removeEventListener('keydown', onDocumentKeydown);
}

galleryContainer.addEventListener('click', (evt) => {
  openPictureModal(evt);
});

closeButton.addEventListener('click', () => {
  closePictureModal();
});



