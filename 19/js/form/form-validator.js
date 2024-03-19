import {cancelOnEscapeKey, getArray, isItemsUnique} from '../utils/common.js';
import {HASHTAG_REGEXP, MAX_HASHTAGS_NUMBER} from '../const.js';
import {sendData} from '../api.js';

const form = document.querySelector('.img-upload__form');
const formSubmitButton = form.querySelector('.img-upload__submit');
const hashtagsText = form.querySelector('.text__hashtags');
const commentText = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const setInputValidator = (element) => {
  pristine.validate(element);
};

const validateText = (value) => getArray(value).every((item) => HASHTAG_REGEXP.test(item) || item === '');
pristine.addValidator(hashtagsText, validateText, 'Введён невалидный хэштег');

const validateUnique = (value) => isItemsUnique(getArray(value.toLowerCase()).filter((word) => word[0] === '#'));
pristine.addValidator(hashtagsText, validateUnique, 'Хэштеги повторяются');

const validateLength = (value) => getArray(value).filter((word) => word[0] === '#').length <= MAX_HASHTAGS_NUMBER;
pristine.addValidator(hashtagsText, validateLength, 'Превышено количество хэштегов');

const validateComment = (value) => value.length <= 140;
pristine.addValidator(commentText, validateComment, 'Не более 140 символов');

const onHashtagsChange = (evt) => {
  setInputValidator(hashtagsText);
  cancelOnEscapeKey(evt);
};
const onCommentChange = (evt) => {
  setInputValidator(commentText);
  cancelOnEscapeKey(evt);
};

hashtagsText.addEventListener('keydown', onHashtagsChange);
commentText.addEventListener('keydown', onCommentChange);

hashtagsText.addEventListener('change', onHashtagsChange);
commentText.addEventListener('change', onCommentChange);

const blockSubmitButton = () => {
  formSubmitButton.disabled = true;
};

const unblockSubmitButton = () => {
  formSubmitButton.disabled = false;
};

const resetForm = () => {
  form.reset();
  pristine.reset();
};

const validateForm = (onSuccess, onError) => {
  const onSubmit = (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess();
          resetForm();
        })
        .catch(onError)
        .finally(unblockSubmitButton);
    }
  };
  form.addEventListener('submit', onSubmit);
  return () => form.removeEventListener('submit', onSubmit);
};

export { validateForm, resetForm };
