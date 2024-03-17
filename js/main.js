import {renderThumbnails} from './thumbnails.js';
import {setModalHandlers} from './big-picture/modal-controls.js';
import {renderBigPicture} from './big-picture/big-picture.js';
import {validateForm} from './form/form-validator.js';
import {getData} from './api.js';
import {showErrorMessage, showGetDataErrorMessage, showSuccessMessage} from './message.js';
import './form/form-controls.js';
import './form/effect.js';
import { enableFilters, setFilterOnClick} from './filter.js';

getData()
  .then((data) => {
    enableFilters(data);
    renderThumbnails(data);
    setModalHandlers(renderBigPicture, data);
    setFilterOnClick(renderThumbnails);
  })
  .catch(showGetDataErrorMessage);

validateForm(showSuccessMessage, showErrorMessage);
