import {COUNT_STEP} from './const.js';

const commentTemplate = document.querySelector('#social-comment')
  .content
  .querySelector('.social__comment');
const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');

const getComment = (commentData) => {
  const fragment = document.createDocumentFragment();
  const newComment = commentTemplate.cloneNode(true);
  const newCommentImage = newComment.querySelector('.social__picture');
  newCommentImage.src = commentData.avatar;
  newCommentImage.alt = commentData.name;
  newComment.querySelector('.social__text').textContent = commentData.message;
  fragment.append(newComment);
  return fragment;
};

const renderComments = (commentsArray, container) => {
  commentsArray.forEach((item) => {
    const newCard = getComment(item);
    container.append(newCard);
  });
};

const getMoreComments = (data) => {
  const countShown = document.querySelector('.social__comment-shown-count');
  const loadMoreButton = document.querySelector('.comments-loader');
  const indexFrom = Number(countShown.textContent);
  const indexTo = Number(countShown.textContent) + COUNT_STEP;
  const commentsToRender = data.comments.slice(indexFrom, indexTo);
  renderComments(commentsToRender, commentsContainer);
  if (indexTo >= data.comments.length) {
    loadMoreButton.classList.add('hidden');
  }
  countShown.textContent = (Number(countShown.textContent) + COUNT_STEP).toString();
};

export {getMoreComments, renderComments};
