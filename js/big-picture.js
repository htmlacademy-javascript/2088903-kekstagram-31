const INIT_COMMENTS_NUMBER = 5;


const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const imageDescription = bigPicture.querySelector('.social__caption');
const moreCommentsButton = bigPicture.querySelector('.social__comments-loader');
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

const getMoreComments = (data) => {
  const countShown = document.querySelector('.social__comment-shown-count');
  const loadMoreButton = document.querySelector('.comments-loader');
  const indexFrom = Number(countShown.textContent);
  const indexTo = Number(countShown.textContent) + 5;
  const commentsToRender = data.comments.slice(indexFrom, indexTo);
  renderComments(commentsToRender, commentsContainer);
  if (indexTo >= data.comments.length) {
    loadMoreButton.classList.add('hidden');
  }
  countShown.textContent = (Number(countShown.textContent) + 5).toString();
};

export {renderBigPicture, clearBigPicture, getMoreComments};
