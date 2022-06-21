//const checkStringLength = (string, length) => string.length <= length;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeRandomGenerator = (...length) => {
  const array = Array.from({length}, (_, index) => index + 1);
  return () => array.splice(getRandomPositiveInteger(0, array.length - 1), 1).shift();
};

export {getRandomPositiveInteger};
export {getRandomArrayElement};
export {makeRandomGenerator};
