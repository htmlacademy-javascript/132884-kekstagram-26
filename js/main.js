/* Функция возвращающая случайное цело число из переданного диапазона с проверками */
const isNumber = (randomNumber) => typeof randomNumber === 'number' || Number.isFinite(randomNumber) || !isNaN(randomNumber);

const returnRandomNumber = (min, max) => {
  if (max <= min) {
    [min, max] = [max, min];
  }
  if (!isNumber(min) || !isNumber(max)) {
    throw new TypeError('Params not right');
  }
  let randomNumber = Math.random() * -(max - min) + max;
  /* Если число отрицательное, то заносим результат в модуль Math.abs и возвращаем положительным */
  if (randomNumber < 0) {
    randomNumber = Math.abs(randomNumber);
  }
  if (!isNumber(randomNumber)) {
    throw new TypeError('Params not right');
  }
  return Math.round(randomNumber);
};

returnRandomNumber(0, 30);
//console.log(returnRandomNumber([2], [5]));

/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
диапазон может быть только положительный, включая ноль.
А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
*/

function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return 'Error';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(3, 8);
//console.log(getRandomIntInclusive(2, 8));

/*
  Функция для проверки максимальной длины строки.
  Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
*/

const maxSrtLength = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new TypeError('Не строка');
  }

  return str.length <= maxLength;
};
maxSrtLength('large string', 50);
//console.log(maxSrtLength('large string', 50));
