import {sendData} from './api.js';
import {resetEffects} from './effects.js';
import {initPopup} from './popup.js';
import {showLoadError, showLoadSuccess} from './messages.js';
import {FILE_TYPES} from './constants.js';
import {resetZoom} from './scale.js';

const imguUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');
const uploadFile = document.querySelector('#upload-file');
const imgUploadSubmit = document.querySelector('.img-upload__submit');

imgUploadForm.addEventListener('keydown', (evt) => {
  if (document.activeElement === textHashtags || document.activeElement === textDescription) {
    evt.stopPropagation();
  }
});

const {openPopup, closePopup} = initPopup(imguUploadOverlay, {
  onClose: () => {
    uploadFile.value = '';
    imgUploadForm.reset();
    resetZoom();
    resetEffects();
  }
});

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const showUploadForm = () => {
  openPopup();
  imgUploadPreview.src = URL.createObjectURL(uploadFile.files[0]);

  document.querySelectorAll('.effects__preview').forEach((effectPreview) => {
    effectPreview.style.backgroundImage = `url(${imgUploadPreview.src})`;
  });
};

const hashTagFormat = new RegExp('^#[A-Za-zА-Яа-яËё0-9]{1,19}$');

let isProcessing = false;
const disableForm = () => {
  imgUploadSubmit.desabled = true;
  isProcessing = true;
};

const enableForm = () => {
  imgUploadSubmit.desabled = false;
  isProcessing = false;
};

window.onload = () => {
  const pristine = new Pristine((imgUploadForm), {
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

  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!isProcessing && pristine.validate()) {
      disableForm();
      sendData(new FormData(imgUploadForm))
        .then(() => {
          closePopup();
          showLoadSuccess();
        })
        .catch(() => {
          showLoadError();
        }).finally( () => {
          enableForm();
        });
    }
  });
};

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    showUploadForm();
    imgUploadPreview.src = URL.createObjectURL(uploadFile.files[0]);
  }
});

export {showUploadForm};
