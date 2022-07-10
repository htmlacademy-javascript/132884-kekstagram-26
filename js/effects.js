import './pictures-bigger.js';

const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadPrewiew = document.querySelector('.img-upload__preview');
const effectLevelValue = document.querySelector('.effect-level__value');
const previewEffectsChrome = document.querySelector('.effects__preview--chrome');

previewEffectsChrome.addEventListener('click', () => {
  imgUploadPrewiew.classList.add('effects__preview--chrome');
});

effectLevelValue.value = 0;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },

  start: 0,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();
});

effectLevelValue.addEventListener('change', (evt) => {
  if (evt.target) {
    previewEffectsChrome.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 10,
      },
      step: 0.1,
    });
  } else {
    previewEffectsChrome.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 0.1,
    });
  }
});
