import {getObjectById, isEscapeKey} from './utils.js';
import {clearBigPicture} from './big-picture.js';
import {getMoreComments} from './comments.js';

const bodyField = document.querySelector('body');
const galleryContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
const loadMoreButton = bigPictureContainer.querySelector('.comments-loader');

const setModalHandlers = (onSelect, data) => {
  const openPictureModal = (evt, cb) => {
    bigPictureContainer.classList.remove('hidden');
    bodyField.classList.add('modal-open');
    const selectedPicture = evt.target.closest('.picture');
    const selectedData = getObjectById(data, selectedPicture.dataset.id);
    onSelect(selectedData);
    document.addEventListener('keydown', cb);
    loadMoreButton.addEventListener('click', () => getMoreComments(selectedData));
  };

  const closePictureModal = (cb) => {
    bigPictureContainer.classList.add('hidden');
    bodyField.classList.remove('modal-open');
    clearBigPicture();

    document.removeEventListener('keydown', cb);
    loadMoreButton.removeEventListener('click', getMoreComments);
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
