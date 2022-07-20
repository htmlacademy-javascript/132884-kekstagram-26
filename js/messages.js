import {initPopup} from './popup.js';

const loadErrorTemplate = document.querySelector('#load-error').content;
const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const showError = (message) => {
  const loadErrorElement = loadErrorTemplate.cloneNode(true);
  loadErrorElement.querySelector('.error__title').textContent = message;
  document.body.append(loadErrorElement);
};

const showLoadError = (message, cb) => {
  const loadErrorElement = errorTemplate.querySelector('.error').cloneNode(true);
  loadErrorElement.querySelector('.error__title').textContent = message;
  loadErrorElement.style.zIndex = 1000;
  document.body.append(loadErrorElement);

  const {openPopup, closePopup} = initPopup(loadErrorElement, {
    onClose: (evt) => {
      if (evt) {
        evt.stopPropagation();
      }
      loadErrorElement.remove();
      if (cb) {
        cb();
      }
    },
    capture: true
  });
  openPopup();

  loadErrorElement.addEventListener('click', (evt) => {
    if (evt.target === loadErrorElement) {
      closePopup();
    }
  });

  loadErrorElement.querySelector('.error__button').addEventListener('click', closePopup);
};

const showLoadSuccess = (message, cb) => {
  const messageElement = successTemplate.querySelector('.success').cloneNode(true);
  messageElement.querySelector('.success__title').textContent = message;

  const {openPopup, closePopup} = initPopup(messageElement, {
    onClose: (evt) => {
      if (evt) {
        evt.stopPropagation();
      }
      messageElement.remove();
      if (cb) {
        cb();
      }
    },
    capture: true
  });
  openPopup();

  messageElement.addEventListener('click', (evt) => {
    if (evt.target === messageElement) {
      closePopup();
    }
  });

  messageElement.querySelector('.success__button').addEventListener('click', closePopup);
  document.body.append(messageElement);
};

export {showError, showLoadError, showLoadSuccess};
