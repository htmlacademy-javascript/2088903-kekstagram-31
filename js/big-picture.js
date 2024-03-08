const INIT_COMMENTS_NUMBER = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const imageDescription = bigPicture.querySelector('.social__caption');
const commentTemplate = document.querySelector('#social-comment')
  .content
  .querySelector('.social__comment');

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

const renderBigPicture = ({url, likes, comments, description}) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsShown.textContent = INIT_COMMENTS_NUMBER;
  commentsTotalCount.textContent = comments.length;
  commentsContainer.innerHTML = '';
  renderComments(comments, commentsContainer);
  imageDescription.textContent = description;
};

export {renderBigPicture};
