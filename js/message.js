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

const showSuccessMessage = () => {
  closeFormModal();
  body.append(successMessage);
  successMessage.addEventListener('click', (evt) => {
    if (!isClickOnMessage(evt) || isClickOnButton(evt)) {
      successMessage.remove();
    }
  });
  body.addEventListener('keydown', (evt) => {
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
  body.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
      setTimeout(() => errorMessage.remove(), 0);
    }
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
