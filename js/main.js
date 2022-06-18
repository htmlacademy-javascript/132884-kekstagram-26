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

const MAX_COMMENTS_COUNT = 6;
const MIN_COMMENTS_COUNT = 3;
const MAX_LIKES_COUNT = 25;
const PHOTO_COUNT = 25;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//const checkStringLength = (string, length) => string.length <= length;

const makeRandomGenerator = (...length) => {
  const array = Array.from({length}, (_, index) => index + 1);
  return () => array.splice(getRandomPositiveInteger(0, array.length - 1), 1).shift();
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getCommentId = makeRandomGenerator(PHOTO_COUNT * MAX_COMMENTS_COUNT);
const getComment = (avatarId) => ({
  id: getCommentId(),
  avatar: `img/avatar-${avatarId}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
});

const getPhotoCardId = makeRandomGenerator(PHOTO_COUNT);
const getPhotoId = makeRandomGenerator(PHOTO_COUNT);
const getPhotoCard = () => {
  const getAvatar = makeRandomGenerator(6);
  return {
    id: getPhotoCardId(),
    url: `photos/photo-${getPhotoId(0, 25)}.jpg`,
    description: `description ${getRandomPositiveInteger(0, MAX_LIKES_COUNT)}`,
    likes: getRandomPositiveInteger(0, MAX_LIKES_COUNT),
    comments: Array.from({length: getRandomPositiveInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)}, () => getComment(getAvatar())),
  };
};

const getPhotoCards = () => Array.from({length: PHOTO_COUNT}, getPhotoCard);
const generateRandomObject = getPhotoCards();

//console.log(generateRandomObject);
