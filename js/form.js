import {initPopup} from './popup.js';

const uploadOverlayElement = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');

const {openPopup} = initPopup(uploadOverlayElement);

const showUploadForm = () => {
  openPopup();
};

const pristine = new Pristine((form), {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper',
});

window.onload = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      return true;
    }
  });
};

export {showUploadForm};
