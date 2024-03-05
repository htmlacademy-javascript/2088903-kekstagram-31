import {createRandomObjects, createObject} from './mock-data.js';
import {renderGallery} from './gallery.js';
import './big-picture.js';

const gallery = document.querySelector('.pictures');
const randomObjects = createRandomObjects(25, createObject);

renderGallery(randomObjects, gallery);
