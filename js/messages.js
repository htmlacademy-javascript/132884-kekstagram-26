import {initPopup} from './popup.js';

const loadErrorTemplate = document.querySelector('#load-error').content;
const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const showError = (message) => {
  const element = loadErrorTemplate.cloneNode(true);
  element.querySelector('.error__title').textContent = message;
  document.body.append(element);
};

const initMessage = (element, {buttonClass}) => {
  element.style.zIndex = '1000';

  const {openPopup, closePopup} = initPopup(element, {
    closeSelector: buttonClass,
    onClose: (evt) => {
      if (evt) {
        evt.stopPropagation();
      }
      document.body.removeChild(element);
    },
    capture: true
  });

  element.addEventListener('click', (evt) => {
    if (evt.target === element) {
      closePopup();
    }
  });

  return () => {
    document.body.append(element);
    openPopup();
  };
};

const messageErrorElement = errorTemplate.querySelector('.error').cloneNode(true);
const showLoadError = initMessage(messageErrorElement, {buttonClass: '.error__button'});

const messageSuccessElement = successTemplate.querySelector('.success').cloneNode(true);
const showLoadSuccess = initMessage(messageSuccessElement, {buttonClass: '.success__button'});

export {showError, showLoadError, showLoadSuccess};
