import {initPopup} from './popup.js';

const uploadOverlayElement = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

socialCommentCount.classList.remove('.hidden'); //Покажите блоки счётчика комментариев
commentsLoader.classList.remove('.hidden'); // Загрузки новых комментариев

const {openPopup} = initPopup(uploadOverlayElement);

const showUploadForm = () => {
  openPopup();
};

window.onload = () => {
  const pristine = new Pristine((form), {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper',
  });

  pristine.addValidator(textHashtags, (value) => {
    if (value.length && value[0] === value[0].toUpperCase()) {
      return true;
    } return false;
  },

  'Первый символ должен быть заглавным', 2, false,
  'Минимальная длина 2 символа', 2, false,
  'Максимальная длина 21 символ', 2, false); //не выводится 'Максимальная длина 21 символ'

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export {showUploadForm};
