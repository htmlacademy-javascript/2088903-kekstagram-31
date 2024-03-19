import {DEFAULT_EFFECT, EFFECTS} from '../const.js';

const form = document.querySelector('.img-upload__form');
const previewImage = form.querySelector('.img-upload__preview > img');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectLevel = sliderContainer.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefaultEffect = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderContainer.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefaultEffect()) {
    sliderContainer.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
    updateSlider();
  }
};

const onSliderUpdate = () => {
  previewImage.style.filter = 'none';
  previewImage.className = '';
  effectLevel.value = 0;
  if (!isDefaultEffect()) {
    const sliderValue = slider.noUiSlider.get();
    previewImage.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.measure})`;
    previewImage.classList.add(`effects__preview--${chosenEffect.name}`);
    const numberValue = Number(sliderValue);
    effectLevel.value = Number.isInteger(numberValue) ? numberValue.toFixed() : numberValue.toFixed(1);
  }
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
