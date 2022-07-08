import './pictures-bigger.js';

const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadPrewiew = document.querySelector('.img-upload__preview');
const previewEffectsChrome = document.querySelector('.effects__preview--chrome');

previewEffectsChrome.addEventListener('click', () => {
  imgUploadPrewiew.classList.add('.effects__preview--chrome');
});

previewEffectsChrome.value = 0.1;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },

  start: 0,
  step: 1,
  connect: 'lower',
});

previewEffectsChrome.addEventListener('change', (evt) => {
  if (evt.target.click) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 10,
      },
      step: 0.1,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});
