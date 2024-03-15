import {isEscapeKey} from '../utils/common.js';
import {resetForm} from './form-render.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');

const showFormModal = (evt, cb) => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', cb);
};

const closeFormModal = (cb) => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = null;
  resetForm();

  document.removeEventListener('keydown', cb);
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal(onEscKeydown);
  }
};

const showModalHandler = (evt) => showFormModal(evt, onEscKeydown);

const closeModalHandler = () => closeFormModal(onEscKeydown);

uploadInput.addEventListener('change', showModalHandler);
closeButton.addEventListener('click', closeModalHandler);
