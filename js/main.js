/*
  В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
*/

const NAMES = [
  'Константин',
  'Олег',
  'Михаил',
  'Александра',
  'Соня',
  'Егор',
  'Дмитрий',
  'Яна',
  'Ксения',
  'Юлия',
  'Злата',
  'Сергей',
  'Виталий',
  'Ольга',
  'Роман',
  'Олег',
  'Глеб',
  'Марина',
  'Ирина',
  'Ева',
  'Алиса',
  'Анелина',
  'Алина',
  'Арина',
  'Инга',
];

const SURNAMES = [
  'Смирнов',
  'Новиков',
  'Петров',
  'Максимова',
  'Гаврилова',
  'Ершов',
  'Исаев',
  'Осипова',
  'Третьякова',
  'Евдокимова',
  'Аксёнов',
  'Николаев',
  'Моисеев',
  'Лапина',
  'Дьячков',
  'Фролов',
  'Одинцов',
  'Трофимова',
  'Нестерова',
  'Филатова',
  'Авдеева',
  'Антонова',
  'Назарова',
  'Белова',
  'Селезнёва',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const GENERATED_OBJECT = 25;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//const checkStringLength = (string, length) => string.length <= length;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createRandomObject = () => ({
  name: `${getRandomArrayElement(NAMES)  } ${  getRandomArrayElement(SURNAMES)  } ${  getRandomArrayElement(MESSAGE)}`,
});

const generateRandomObject = Array.from({length: GENERATED_OBJECT}, createRandomObject);

//console.log(generateRandomObject);

/*
const myObject = {
  id: 1,
  url: 'photos/{{photo-1}}.jpg',
  description: 'photo1',
  likes: 2,
  comments: [
    {
      id: 135,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артём',
    }
  ]
};
*/
