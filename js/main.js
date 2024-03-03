import {createRandomObjects, createObject} from './mock-data';
import {renderGallery} from './gallery';

const gallery = document.querySelector('.pictures');
const randomObjects = createRandomObjects(25, createObject);

renderGallery(randomObjects, gallery);
