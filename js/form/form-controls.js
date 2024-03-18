import {isEscapeKey} from '../utils/common.js';
import {renderUploadedImage, resetForm} from './form-render.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {FILE_TYPES} from '../const.js';

const body = document.querySelector('body');
const form = body.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');

const showFormModal = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown);
};

const closeFormModal = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = null;
  resetForm();
  resetScale();
  resetEffects();

  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal(onEscKeydown);
  }
}

const onUpload = () => {
  const file = uploadInput.files[0];
  const isImage = FILE_TYPES.some((ending) => file.name.toLowerCase().endsWith(ending));
  if (isImage) {
    renderUploadedImage(file);
    showFormModal();
  }
};

const onCloseClick = () => closeFormModal();

uploadInput.addEventListener('change', onUpload);
closeButton.addEventListener('click', onCloseClick);

export { closeFormModal };
