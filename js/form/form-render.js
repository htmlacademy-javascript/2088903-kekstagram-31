const uploadOverlay = document.querySelector('.img-upload__overlay');
const preview = uploadOverlay.querySelector('.img-upload__preview > img');
const scale = uploadOverlay.querySelector('.scale__control--value');
const effectLevel = uploadOverlay.querySelector('.effect-level__value');
const hashtags = uploadOverlay.querySelector('.text__hashtags');
const description = uploadOverlay.querySelector('.text__description');
const effectsPreview = uploadOverlay.querySelectorAll('.effects__preview');

const renderUploadedImage = (image) => {
  const blobUrl = URL.createObjectURL(image);
  preview.src = blobUrl;
  effectsPreview.forEach((item) => {
    item.style.backgroundImage = `url(${blobUrl})`;
  });
};

const resetForm = () => {
  preview.src = null;
  scale.value = '100%';
  effectLevel.value = null;
  hashtags.value = null;
  description.value = null;
};

export { renderUploadedImage, resetForm };
