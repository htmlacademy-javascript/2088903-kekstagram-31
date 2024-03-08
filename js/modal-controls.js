import {getObjectById, isEscapeKey} from './utils.js';

const galleryContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
const bodyField = document.querySelector('body');

const setModalHandlers = (onSelect, data) => {
  const openPictureModal = (evt, cb) => {
    bigPictureContainer.classList.remove('hidden');
    bodyField.classList.add('modal-open');
    const selectedPicture = evt.target.closest('.picture');
    onSelect(getObjectById(data, selectedPicture.dataset.id));
    document.addEventListener('keydown', cb);
    // temporarily hidden, functionality will be added later
    bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
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
};

export {setModalHandlers};
