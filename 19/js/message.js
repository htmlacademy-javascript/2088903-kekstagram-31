import {findTemplate, isEscapeKey} from './utils/common.js';
import {closeFormModal} from './form/form-controls.js';
import {TIME_TO_CLOSING} from './const.js';

const body = document.querySelector('body');
const dataErrorMessage = findTemplate('data-error');
const successMessage = findTemplate('success');
const errorMessage = findTemplate('error');

const isClickOnMessage = (evt) => evt.target.closest('.success__inner') || evt.target.closest('.error__inner');

const isClickOnButton = (evt) => evt.target.closest('.success__button') || evt.target.closest('.error__button');

const showGetDataErrorMessage = () => {
  body.append(dataErrorMessage);

  setTimeout(() => dataErrorMessage.remove(), TIME_TO_CLOSING);
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    closeFormModal();
    removeSuccessMessage();
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    removeErrorMessage();
  }
};

const createOnClick = (evt, cb) => {
  if (!isClickOnMessage(evt) || isClickOnButton(evt)) {
    cb();
  }
};

const onSuccessMessageClick = (evt) => createOnClick(evt, removeSuccessMessage);

const onErrorMessageClick = (evt) => createOnClick(evt, removeErrorMessage);

const showSuccessMessage = () => {
  closeFormModal();
  body.append(successMessage);
  successMessage.addEventListener('click', onSuccessMessageClick);
  body.addEventListener('keydown', onSuccessMessageEscKeydown);
};

const showErrorMessage = () => {
  body.append(errorMessage);
  errorMessage.addEventListener('click', onErrorMessageClick);
  body.addEventListener('keydown', onErrorMessageEscKeydown);
};

function removeSuccessMessage () {
  body.querySelector('.success').remove();
  body.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

function removeErrorMessage () {
  setTimeout(() => body.querySelector('.error').remove(), 0);
  body.removeEventListener('keydown', onErrorMessageEscKeydown);
}

export { showGetDataErrorMessage, showSuccessMessage, showErrorMessage };
