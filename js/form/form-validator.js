import {isHashtagsValid} from './hashtags-validation.js';
import {getArray, isEscapeKey, isItemsUnique} from '../utils/common.js';
import {MAX_HASHTAGS_NUMBER} from '../const.js';

const form = document.querySelector('.img-upload__form');
const formSubmitButton = document.querySelector('.img-upload__submit');
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

const validateText = (value) => isHashtagsValid(getArray(value));
pristine.addValidator(hashtagsText, validateText, 'Введён невалидный хэштег');

const validateUnique = (value) => isItemsUnique(getArray(value.toLowerCase()).filter((word) => word[0] === '#'));
pristine.addValidator(hashtagsText, validateUnique, 'Хэштеги повторяются');

const validateLength = (value) => getArray(value).filter((word) => word[0] === '#').length <= MAX_HASHTAGS_NUMBER;
pristine.addValidator(hashtagsText, validateLength, 'Превышено количество хэштегов');

const validateComment = (value) => value.length <= 140;
pristine.addValidator(commentText, validateComment, 'Не более 140 символов');

const onHashtagsChange = (evt) => {
  setInputValidator(hashtagsText);
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};
const onCommentChange = (evt) => {
  setInputValidator(commentText);
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
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

const validateForm = () => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      resetForm();
      unblockSubmitButton();
    }
  });
};

export { validateForm, resetForm };
