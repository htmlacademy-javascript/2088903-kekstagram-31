const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/;

const isTextValid = (text) => hashtagRegexp.test(text);

const isHashtagsValid = (array) => {
  const hashtagsArray = array.filter((word) => word[0] === '#');

  return hashtagsArray.every((item) => isTextValid(item, hashtagRegexp));
};

export { isHashtagsValid };
