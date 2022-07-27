const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArray = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

class RandomGenerator {
  constructor(length) {
    this.array = Array.from({length}, (_, index) => index + 1);
  }

  next() {
    return this.array.splice(getRandomPositiveInteger(0, this.array.length - 1), 1).shift();
  }
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const throttle = (cb, ms) => {
  let id;

  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      cb(...args);
    }, ms);
  };
};

export {getRandomPositiveInteger, getRandomArray, RandomGenerator, shuffle, throttle};
