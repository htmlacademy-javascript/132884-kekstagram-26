const STEP = 25;
const MIN = 25;
const MAX = 100;

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const scale = document.querySelector('.scale');
const scaleControlValue = document.querySelector('.scale__control--value');

scale.addEventListener('click', (evt) => {
  const value = scaleControlValue.value.split('%').shift();
  let numberValue = Number(value);

  if (evt.target.classList.contains('scale__control--smaller')) {
    numberValue = Math.max(numberValue - STEP, MIN);
  } else if (evt.target.classList.contains('scale__control--bigger')) {
    numberValue = Math.min(numberValue + STEP, MAX);
  }
  scaleControlValue.value = `${numberValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleControlValue.value})`;
});

const resetZoom = () => {
  scaleControlValue.value = `${MAX}%`;
  imgUploadPreview.style.transform = `scale(${scaleControlValue.value})`;
};

export {resetZoom};
