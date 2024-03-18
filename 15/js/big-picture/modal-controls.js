import {getObjectById, isEscapeKey} from '../utils/common.js';
import {clearBigPicture} from './big-picture.js';

const bodyField = document.querySelector('body');
const galleryContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const setModalHandlers = (onSelect, data) => {

  const openPictureModal = (evt, cb) => {
    const selectedPicture = evt.target.closest('.picture');
    if (selectedPicture) {
      bigPicture.classList.remove('hidden');
      bodyField.classList.add('modal-open');
      const selectedData = getObjectById(data, selectedPicture.dataset.id);
      onSelect(selectedData);
      document.addEventListener('keydown', cb);
    }
  };

  const closePictureModal = (cb) => {
    bigPicture.classList.add('hidden');
    bodyField.classList.remove('modal-open');
    clearBigPicture();

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
