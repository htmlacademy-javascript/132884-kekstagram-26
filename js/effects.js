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

const effectLevel = document.querySelector('.effect-level');
const slider = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectValueInput = document.querySelector('.effect-level__value');

let currentEffect = 'none';

noUiSlider.create(slider, {
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
  effectLevel.classList.add('hidden');

  effectsRadio.forEach((effectsRadioElement, index) => {
    effectsRadio.checked = index === 0;
  });
};

slider.noUiSlider.on('update', () => {
  effectValueInput.value = slider.noUiSlider.get();

  if (currentEffect in EFFECTS) {
    const effect = EFFECTS[currentEffect];

    imgUploadPreview.style.filter = `${effect.effect}(${effectValueInput.value}${effect.unit})`;
  } else {
    resetEffects();
  }
});

effects.addEventListener('change', (evt) => {
  currentEffect = evt.target.id.split('-').pop();

  if (currentEffect in EFFECTS) {
    const effect = EFFECTS[currentEffect];

    effectLevel.classList.remove('hidden');
    slider.noUiSlider.updateOptions({
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
