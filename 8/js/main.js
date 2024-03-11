import {createRandomObjects, createObject} from './mock-data.js';
import {renderGallery} from './gallery.js';
import {setModalHandlers} from './modal-controls.js';
import {renderBigPicture} from './big-picture';

const gallery = document.querySelector('.pictures');
const randomObjects = createRandomObjects(25, createObject);

renderGallery(randomObjects, gallery);
setModalHandlers(renderBigPicture, randomObjects);
