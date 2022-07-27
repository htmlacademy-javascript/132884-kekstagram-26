const STEP = 25;
const MIN = 25;
const MAX = 100;

const imgUploadPreview = document.querySelector('.img-upload__preview');
const scale = document.querySelector('.scale');
const valueInput = document.querySelector('.scale__control--value');

scale.addEventListener('click', (evt) => {
  const value = valueInput.value.split('%').shift();
  let numberValue = Number(value);

  if (evt.target.classList.contains('scale__control--smaller')) {
    numberValue = Math.max(numberValue - STEP, MIN);
  } else if (evt.target.classList.contains('scale__control--bigger')) {
    numberValue = Math.min(numberValue + STEP, MAX);
  }
  valueInput.value = `${numberValue}%`;
  imgUploadPreview.style.transform = `scale(${valueInput.value})`;
});

const resetZoom = () => {
  valueInput.value = `${MAX}%`;
  imgUploadPreview.style.transform = `scale(${valueInput.value})`;
};

export {resetZoom};
