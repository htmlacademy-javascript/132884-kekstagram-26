import {initPopup} from './popup.js';

const uploadOverlayElement = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');
const uploadInput = document.querySelector('#upload-file');

const {openPopup} = initPopup(uploadOverlayElement, {
  onClose: () => {
    uploadInput.value = '';
  }
});

const showUploadForm = () => {
  openPopup();
};

const hashTagFormat = new RegExp('^#[A-Za-zА-Яа-яËё0-9]{1,19}$');

window.onload = () => {
  const pristine = new Pristine((form), {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper',
  });

  const hashTagErrors = [];
  pristine.addValidator(textHashtags, (value) => {
    hashTagErrors.length = 0;
    const hashTags = value.split(' ').filter(Boolean);

    const usedHashTags = [];
    hashTags.forEach((hashTag) => {
      if (!hashTagFormat.test(hashTag)) {
        hashTagErrors.push(`Тэг ${hashTag} содержит недопустимые символы или слишком длинный`);
      }
      if (usedHashTags.includes(hashTag.toLowerCase())) {
        hashTagErrors.push(`Тэг ${hashTag} повторяется`);
      } else {
        usedHashTags.push(hashTag.toLowerCase());
      }
    });

    if (hashTags.length > 5) {
      hashTagErrors.push('Максимальное количество тэгов 5');
    }

    return !hashTagErrors.length;
  }, () => hashTagErrors.join(', '), 2, false);

  pristine.addValidator(textDescription, (value) => value.length <= 140, 'Максимальная длинна 140 символов');

  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

uploadInput.addEventListener('change', () => {
  showUploadForm();
});

export {showUploadForm};
