import {findTemplate, renderItems} from './utils/dom.js';

const thumbnailTemplate = findTemplate('picture');
const thumbnailsContainer = document.querySelector('.pictures');

const createThumbnail = (({ id, url, description, likes, comments }) => {
  const thumbnail = document.createDocumentFragment();
  const newThumbnail = thumbnailTemplate.cloneNode(true);
  const newThumbnailImage = newThumbnail.querySelector('.picture__img');
  newThumbnail.dataset.id = id;
  newThumbnailImage.src = url;
  newThumbnailImage.alt = description;
  newThumbnail.querySelector('.picture__likes').textContent = likes;
  newThumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.append(newThumbnail);
  return thumbnail;
});

const renderThumbnails = (photos) => renderItems(photos, createThumbnail,thumbnailsContainer);

export { renderThumbnails };
