const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

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
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
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

export {getRandomPositiveInteger, getRandomArrayElement, RandomGenerator, shuffle, throttle};
