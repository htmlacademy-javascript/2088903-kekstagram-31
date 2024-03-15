import {createRandomObjects, createObject} from './mock-data.js';
import {renderThumbnails} from './thumbnails.js';
import {setModalHandlers} from './big-picture/modal-controls.js';
import {renderBigPicture} from './big-picture/big-picture.js';
import {validateForm} from './form/form-validator.js';
import './form/form-controls.js';

const randomObjects = createRandomObjects(25, createObject);

renderThumbnails(randomObjects);
setModalHandlers(renderBigPicture, randomObjects);
validateForm();
