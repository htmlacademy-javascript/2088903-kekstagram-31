const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createCard = (({ url, description, likes, comments }) => {
  const fragment = document.createDocumentFragment();
  const newCard = pictureTemplate.cloneNode(true);
  newCard.querySelector('.picture__img').src = url;
  newCard.querySelector('.picture__img').alt = description;
  newCard.querySelector('.picture__likes').textContent = likes;
  newCard.querySelector('.picture__comments').textContent = comments.length;
  fragment.append(newCard);
  return fragment.querySelector('.picture');
});

const renderGallery = (data, container) => {
  data.forEach(({ url, description, likes, comments }) => {
    const newCard = createCard({url, description, likes, comments});
    container.append(newCard);
  });
};

export { renderGallery };
