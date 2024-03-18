import {isEscapeKey} from '../utils/common.js';
import {renderUploadedImage} from './form-render.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {FILE_TYPES} from '../const.js';
import {resetForm, validateForm} from './form-validator.js';
import {showErrorMessage, showSuccessMessage} from '../message.js';

const body = document.querySelector('body');
const form = body.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');

let onSubmitLink;

const showFormModal = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  onSubmitLink = validateForm(showSuccessMessage, showErrorMessage);
  document.addEventListener('keydown', onEscKeydown);
};

const closeFormModal = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = null;
  resetForm();
  resetScale();
  resetEffects();

  form.removeEventListener('submit', onSubmitLink);
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
