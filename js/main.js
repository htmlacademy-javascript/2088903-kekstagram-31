import {renderThumbnails} from './thumbnails.js';
import {setModalHandlers} from './big-picture/modal-controls.js';
import {renderBigPicture} from './big-picture/big-picture.js';
import {validateForm} from './form/form-validator.js';
import {getData} from './api.js';
import {showErrorMessage, showGetDataErrorMessage, showSuccessMessage} from './message.js';
import './form/form-controls.js';
import './form/effect.js';

getData()
  .then((data) => {
    renderThumbnails(data);
    setModalHandlers(renderBigPicture, data);
  })
  .catch(showGetDataErrorMessage);

validateForm(showSuccessMessage, showErrorMessage);
