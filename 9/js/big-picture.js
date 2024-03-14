import {renderComments} from './comments.js';
import {INIT_COMMENTS_NUMBER} from './const.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const imageDescription = bigPicture.querySelector('.social__caption');
const moreCommentsButton = bigPicture.querySelector('.social__comments-loader');

const renderBigPicture = ({url, likes, comments, description}) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsShown.textContent = comments.length > INIT_COMMENTS_NUMBER ? INIT_COMMENTS_NUMBER : comments.length;
  commentsTotalCount.textContent = comments.length;
  commentsContainer.innerHTML = '';
  renderComments(comments.slice(0, INIT_COMMENTS_NUMBER), commentsContainer);
  imageDescription.textContent = description;
  if (comments.length <= INIT_COMMENTS_NUMBER) {
    moreCommentsButton.classList.add('hidden');
  } else {
    moreCommentsButton.classList.remove('hidden');
  }
};

const clearBigPicture = () => {
  bigPictureImg.src = '';
  likesCount.textContent = '0';
  commentsShown.textContent = '0';
  commentsTotalCount.textContent = '0';
  commentsContainer.innerHTML = '';
  imageDescription.textContent = '';
  moreCommentsButton.classList.remove('hidden');
};

export {renderBigPicture, clearBigPicture};
