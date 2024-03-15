import {isHashtagsValid} from './hashtags-validation.js';
import {getArray, isItemsUnique} from '../utils/common.js';
import {MAX_HASHTAGS_NUMBER} from '../const.js';

const form = document.querySelector('.img-upload__form');
const formSubmitButton = document.querySelector('.img-upload__submit');
const hashtagsText = form.querySelector('.text__hashtags');
const commentText = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

const setInputValidator = (element) => {
  pristine.validate(element);
};

const validateUnique = (value) => isItemsUnique(getArray(value));
pristine.addValidator(hashtagsText, validateUnique, 'Хэштеги повторяются');

const validateLength = (value) => getArray(value).length <= MAX_HASHTAGS_NUMBER;
pristine.addValidator(hashtagsText, validateLength, 'Превышено количество хэштегов');

const validateText = (value) => isHashtagsValid(getArray(value));
pristine.addValidator(hashtagsText, validateText, 'Введён невалидный хэштег');

const validateComment = (value) => value.length <= 140;
pristine.addValidator(commentText, validateComment, 'Не более 140 символов');

const onHashtagsChange = () => setInputValidator(hashtagsText);
const onCommentChange = () => setInputValidator(commentText);

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
