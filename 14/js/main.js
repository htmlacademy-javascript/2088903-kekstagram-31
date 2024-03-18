import {renderThumbnails} from './thumbnails.js';
import {setModalHandlers} from './big-picture/modal-controls.js';
import {renderBigPicture} from './big-picture/big-picture.js';
import {getData} from './api.js';
import {showGetDataErrorMessage} from './message.js';
import { enableFilters, setFilterOnClick} from './filter.js';

getData()
  .then((data) => {
    enableFilters(data);
    renderThumbnails(data);
    setModalHandlers(renderBigPicture, data);
    setFilterOnClick(renderThumbnails);
  })
  .catch(showGetDataErrorMessage);
