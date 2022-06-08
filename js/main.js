//Пример кода: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

/*
Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
имя_функции(от, до); // Результат: целое число из диапазона "от...до"
диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа.
*/

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

const myVariable = getRandomIntInclusive(3, 8);
//console.log(myVariable);

/*
  Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
//Больше ничего внятного по этому вопросу не нашел ((((((((

const maxSrtLength = (...values) => {
  str.length();
  return str.length();
};

const myVariableString = maxSrtLength('large string');
