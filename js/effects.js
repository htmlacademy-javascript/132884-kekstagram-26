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
const effectLevelSlider = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const effectsRadios = document.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level__value');

let currentEffect = 'none';
let currentClassEffect;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },

  start: 0,
  step: 0.1,
  connect: 'lower',
});

const setEffectClass = (className) => {
  if (currentClassEffect) {
    imgUploadPreview.classList.remove(currentClassEffect);
  }
  if (className) {
    imgUploadPreview.classList.add(className);
    currentClassEffect = className;
  }
};

const resetEffects = () => {
  imgUploadPreview.style.filter = '';
  effectLevel.classList.add('hidden');

  setEffectClass(null);
  effectsRadios.forEach((effectsRadio, index) => {
    effectsRadio.checked = index === 0;
  });
};

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();

  if (currentEffect in EFFECTS) {
    const effect = EFFECTS[currentEffect];

    imgUploadPreview.style.filter = `${effect.effect}(${effectLevelValue.value}${effect.unit})`;
  } else {
    resetEffects();
  }
});

effects.addEventListener('change', (evt) => {
  currentEffect = evt.target.id.split('-').pop();

  if (currentEffect in EFFECTS) {
    const effect = EFFECTS[currentEffect];

    effectLevel.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effect.slider.min,
        max: effect.slider.max,
      },
      start: effect.slider.max,
      step: effect.slider.step,
    });
    setEffectClass(`effects__preview--${currentEffect}`);
  } else {
    resetEffects();
  }
});

export {resetEffects};
