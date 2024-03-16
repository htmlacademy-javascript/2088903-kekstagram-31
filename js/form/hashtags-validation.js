const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;

const isTextValid = (text) => hashtagRegexp.test(text);

const isHashtagsValid = (array) => array.filter((word) => word[0] === '#').every((item) => isTextValid(item, hashtagRegexp));

export { isHashtagsValid };
