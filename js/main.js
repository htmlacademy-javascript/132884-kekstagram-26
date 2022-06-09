/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
диапазон может быть только положительный, включая ноль.
А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
*/

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Error';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};
getRandomIntInclusive(3, 8);
//console.log(getRandomIntInclusive(3, 8));

/*
  Функция для проверки максимальной длины строки.
  Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
*/

const maxSrtLength = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new TypeError('Не строка');
  }

  return str.length < maxLength;
};
maxSrtLength('large string', 50);
//console.log(maxSrtLength('large string', 50));
