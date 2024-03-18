const uploadOverlay = document.querySelector('.img-upload__overlay');
const preview = uploadOverlay.querySelector('.img-upload__preview > img');
const effectsPreview = uploadOverlay.querySelectorAll('.effects__preview');

const renderUploadedImage = (image) => {
  const blobUrl = URL.createObjectURL(image);
  preview.src = blobUrl;
  effectsPreview.forEach((item) => {
    item.style.backgroundImage = `url(${blobUrl})`;
  });
};

export { renderUploadedImage };
