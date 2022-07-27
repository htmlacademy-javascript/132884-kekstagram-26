import './pictures-bigger.js';

const EFFECTS = {
  chrome: {
    effect: 'grayscale',
    unit: '',
    slider: {step: 0.1, min: 0, max: 1}
  },
  sepia: {
    effect: 'sepia',
    unit: '',
    slider: {step: 0.1, min: 0, max: 1}
  },
  marvin: {
    effect: 'invert',
    unit: '%',
    slider: {step: 1, min: 0, max: 100}
  },
  phobos: {
    effect: 'blur',
    unit: 'px',
    slider: {step: 0.1, min: 0, max: 3}
  },
  heat: {
    effect: 'brightness',
    unit: '',
    slider: {step: 0.1, min: 1, max: 3}
  }
};

const effectLevelElement = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const effectsRadioElements = document.querySelectorAll('.effects__radio');
const effectValueInputElement = document.querySelector('.effect-level__value');

let currentEffect = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },

  start: 0,
  step: 0.1,
  connect: 'lower',
});

const resetEffects = () => {
  imgUploadPreview.style.filter = '';
  effectLevelElement.classList.add('hidden');

  effectsRadioElements.forEach((index) => {
    effectsRadioElements.checked = index === 0;
  });
};

sliderElement.noUiSlider.on('update', () => {
  effectValueInputElement.value = sliderElement.noUiSlider.get();

  if (currentEffect in EFFECTS) {
    const effect = EFFECTS[currentEffect];

    imgUploadPreview.style.filter = `${effect.effect}(${effectValueInputElement.value}${effect.unit})`;
  } else {
    resetEffects();
  }
});

effectsElement.addEventListener('change', (evt) => {
  currentEffect = evt.target.id.split('-').pop();

  if (currentEffect in EFFECTS) {
    const effect = EFFECTS[currentEffect];

    effectLevelElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: effect.slider.min,
        max: effect.slider.max,
      },
      start: effect.slider.min,
      step: effect.slider.step,
    });
  } else {
    resetEffects();
  }

});

export {resetEffects};
