import {COUNT_STEP} from '../const.js';
import {findTemplate} from '../utils/common.js';

const commentTemplate = findTemplate('social-comment');
const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotal = bigPicture.querySelector('.social__comment-total-count');
const loadMoreButton = bigPicture.querySelector('.comments-loader');

commentsContainer.innerHTML = '';

let comments = [];
let currentCount = 0;

const createComment = (commentData) => {
  const fragment = document.createDocumentFragment();
  const newComment = commentTemplate.cloneNode(true);
  const newCommentImage = newComment.querySelector('.social__picture');
  newCommentImage.src = commentData.avatar;
  newCommentImage.alt = commentData.name;
  newComment.querySelector('.social__text').textContent = commentData.message;
  fragment.append(newComment);
  return fragment;
};

const renderNextComments = () => {
  const commentsFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedTotal = renderedComments.length + currentCount;

  renderedComments.forEach((item) => {
    const createdComment = createComment(item);
    commentsFragment.append(createdComment);
  });

  commentsContainer.append(commentsFragment);
  commentsShown.textContent = `${renderedTotal}`;

  if (renderedTotal >= comments.length) {
    loadMoreButton.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  commentsContainer.innerHTML = '';
  loadMoreButton.classList.remove('hidden');

  loadMoreButton.removeEventListener('click', renderNextComments);
};

const renderComments = (commentsArray) => {
  comments = commentsArray;
  commentsTotal.textContent = commentsArray.length;
  renderNextComments();

  loadMoreButton.addEventListener('click', renderNextComments);
};

export {renderComments, clearComments};
