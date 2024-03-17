const uploadOverlay = document.querySelector('.img-upload__overlay');
const preview = uploadOverlay.querySelector('.img-upload__preview');
const scale = uploadOverlay.querySelector('.scale__control--value');
const effectLevel = uploadOverlay.querySelector('.effect-level__value');
const hashtags = uploadOverlay.querySelector('.text__hashtags');
const description = uploadOverlay.querySelector('.text__description');

const resetForm = () => {
  preview.firstChild.src = null;
  scale.value = '100%';
  effectLevel.value = null;
  hashtags.value = null;
  description.value = null;
};

export { resetForm };
