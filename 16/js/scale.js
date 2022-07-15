const imgUploadPreview = document.querySelector('.img-upload__preview');
const scaleElement = document.querySelector('.scale');
const valueInputElement = document.querySelector('.scale__control--value');

const STEP = 25;
const MIN = 25;
const MAX = 100;

scaleElement.addEventListener('click', (evt) => {
  const value = valueInputElement.value.split('%').shift();
  let numberValue = Number(value);

  if (evt.target.classList.contains('scale__control--smaller')) {
    numberValue = Math.max(numberValue - STEP, MIN);
  } else if (evt.target.classList.contains('scale__control--bigger')) {
    numberValue = Math.min(numberValue + STEP, MAX);
  }
  valueInputElement.value = `${numberValue}%`;
  imgUploadPreview.style.transform = `scale(${valueInputElement.value})`;
});
