import {renderComments, clearComments} from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const imageDescription = bigPicture.querySelector('.social__caption');

const renderBigPicture = ({url, likes, comments, description}) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  renderComments(comments);
  imageDescription.textContent = description;
};

const clearBigPicture = () => {
  bigPictureImg.src = '';
  likesCount.textContent = '0';
  imageDescription.textContent = '';
  clearComments();
};

export {renderBigPicture, clearBigPicture};
