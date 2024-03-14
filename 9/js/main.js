import {createRandomObjects, createObject} from './mock-data.js';
import {renderThumbnails} from './thumbnails.js';
import {setModalHandlers} from './modal-controls.js';
import {renderBigPicture} from './big-picture';

const randomObjects = createRandomObjects(25, createObject);

renderThumbnails(randomObjects);
setModalHandlers(renderBigPicture, randomObjects);
