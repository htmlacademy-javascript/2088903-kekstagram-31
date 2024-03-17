import {findTemplate, isEscapeKey} from './utils/common.js';
import {closeFormModal} from './form/form-controls.js';

const body = document.querySelector('body');
const dataErrorMessage = findTemplate('data-error');
const successMessage = findTemplate('success');
const errorMessage = findTemplate('error');

const isClickOnMessage = (evt) => evt.target.closest('.success__inner') || evt.target.closest('.error__inner');

const isClickOnButton = (evt) => evt.target.closest('.success__button') || evt.target.closest('.error__button');

const showGetDataErrorMessage = () => {
  body.append(dataErrorMessage);

  setTimeout(() => dataErrorMessage.remove(), 5000);
};

const showSuccessMessage = () => {
  body.append(successMessage);
  successMessage.addEventListener('click', (evt) => {
    if (!isClickOnMessage(evt) || isClickOnButton(evt)) {
      successMessage.remove();
      closeFormModal();
    }
  });
  successMessage.addEventListener('keydown', (evt) => {
    onEscKeydown(evt, successMessage);
  });
};

const showErrorMessage = () => {
  body.append(errorMessage);
  errorMessage.addEventListener('click', (evt) => {
    if (!isClickOnMessage(evt) || isClickOnButton(evt)) {
      errorMessage.remove();
    }
  });
  errorMessage.addEventListener('keydown', (evt) => {
    onEscKeydown(evt, errorMessage);
  });
};

function onEscKeydown (evt, item) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal();
    item.remove();
  }
}

export { showGetDataErrorMessage, showSuccessMessage, showErrorMessage };
