// import {createRandomObjects, createObject} from './mock-data.js';
import {renderThumbnails} from './thumbnails.js';
import {setModalHandlers} from './big-picture/modal-controls.js';
import {renderBigPicture} from './big-picture/big-picture.js';
import {validateForm} from './form/form-validator.js';
import {getData} from './api.js';
import './form/form-controls.js';
import './form/effect.js';
import {findTemplate} from './utils/common.js';

const showGetDataErrorMessage = () => {
  const message = findTemplate('data-error');
  const body = document.querySelector('body');
  body.append(message);

  setTimeout(() => message.remove(), 5000);
};

getData()
  .then((data) => {
    renderThumbnails(data);
    setModalHandlers(renderBigPicture, data);
  })
  .catch(showGetDataErrorMessage);

validateForm();
