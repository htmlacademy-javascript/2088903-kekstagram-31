import {isEscapeKey} from './utils.js';

const galleryContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');

const openPictureModal = (evt, cb) => {
  bigPictureContainer.classList.remove('hidden');
  if (evt.target.closest('.picture')) {
    // getPictureData();
  }

  document.addEventListener('keydown', cb);
};

const closePictureModal = (cb) => {
  bigPictureContainer.classList.add('hidden');
  // clearBigPicture();

  document.removeEventListener('keydown', cb);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal(onDocumentKeydown);
  }
};

const openModalHandler = (evt) => openPictureModal(evt, onDocumentKeydown);

const closeModalHandler = () => closePictureModal(onDocumentKeydown);

galleryContainer.addEventListener('click', openModalHandler);
closeButton.addEventListener('click', closeModalHandler);
