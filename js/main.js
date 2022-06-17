const IDENTIFICATOR = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '24',
];

const AVATAR = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
  'img/avatar-7.svg',
  'img/avatar-8.svg',
  'img/avatar-9.svg',
  'img/avatar-10.svg',
  'img/avatar-11.svg',
  'img/avatar-12.svg',
  'img/avatar-13.svg',
  'img/avatar-14.svg',
  'img/avatar-15.svg',
  'img/avatar-16.svg',
  'img/avatar-17.svg',
  'img/avatar-18.svg',
  'img/avatar-19.svg',
  'img/avatar-20.svg',
  'img/avatar-21.svg',
  'img/avatar-22.svg',
  'img/avatar-23.svg',
  'img/avatar-24.svg',
  'img/avatar-25.svg',
];

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

const ADDRESS = [
  'photos/photo-1.jpg',
  'photos/photo-2.jpg',
  'photos/photo-3.jpg',
  'photos/photo-4.jpg',
  'photos/photo-5.jpg',
  'photos/photo-6.jpg',
  'photos/photo-7.jpg',
  'photos/photo-8.jpg',
  'photos/photo-9.jpg',
  'photos/photo-10.jpg',
  'photos/photo-11.jpg',
  'photos/photo-12.jpg',
  'photos/photo-13.jpg',
  'photos/photo-14.jpg',
  'photos/photo-15.jpg',
  'photos/photo-16.jpg',
  'photos/photo-17.jpg',
  'photos/photo-18.jpg',
  'photos/photo-19.jpg',
  'photos/photo-20.jpg',
  'photos/photo-21.jpg',
  'photos/photo-22.jpg',
  'photos/photo-23.jpg',
  'photos/photo-24.jpg',
  'photos/photo-25.jpg',

];

const DESCRIPTION = [
  'photo-1',
  'photo-2',
  'photo-3',
  'photo-4',
  'photo-5',
  'photo-6',
  'photos-7',
  'photos-8',
  'photos-9',
  'photos-10',
  'photos-11',
  'photos-12',
  'photos-13',
  'photos-14',
  'photos-15',
  'photos-16',
  'photos-17',
  'photos-18',
  'photos-19',
  'photos-20',
  'photos-21',
  'photos-22',
  'photos-23',
  'photos-24',
  'photos-25',
];

const LIKES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '24',
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
  id: `${getRandomArrayElement(IDENTIFICATOR)  }`,
  avatar: `${getRandomArrayElement(AVATAR)  }`,
  name: `${getRandomArrayElement(NAMES)  } ${  getRandomArrayElement(SURNAMES)}`,
  url: `${getRandomArrayElement(ADDRESS) }`,
  description: `${getRandomArrayElement(DESCRIPTION) }`,
  message: `${getRandomArrayElement(MESSAGE) }`,
  likes: `${getRandomArrayElement(LIKES) }`,
});

const generateRandomObject = Array.from({length: GENERATED_OBJECT}, createRandomObject);

//console.log(generateRandomObject);
