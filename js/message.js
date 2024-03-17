import {findTemplate} from './utils/common.js';

const body = document.querySelector('body');
const dataErrorMessage = findTemplate('data-error');
const successMessage = findTemplate('success');
const errorMessage = findTemplate('error');

const showGetDataErrorMessage = () => {
  body.append(dataErrorMessage);

  setTimeout(() => dataErrorMessage.remove(), 5000);
};

const showSuccessMessage = () => {
  body.append(successMessage);

  setTimeout(() => successMessage.remove(), 5000);
};

const showErrorMessage = () => {
  body.append(errorMessage);

  setTimeout(() => errorMessage.remove(), 5000);
};

export { showGetDataErrorMessage, showSuccessMessage, showErrorMessage };
