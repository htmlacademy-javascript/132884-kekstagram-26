import {ALERT_SHOW_TIME} from './constants.js';

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const showAlert = (message) => {
  const alert = document.querySelector('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.top = '0';
  alert.style.top = 'left';
  alert.style.top = 'right';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = '30px';
  alert.style.backgroundColor = 'red';
  alert.textContent.content = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

class RandomGenerator {
  constructor(length) {
    this.array = Array.from({length}, (_, index) => index + 1);
  }

  next() {
    return this.array.splice(getRandomPositiveInteger(0, this.array.length - 1), 1).shift();
  }
}

export {getRandomPositiveInteger, getRandomArrayElement, RandomGenerator, showAlert};
