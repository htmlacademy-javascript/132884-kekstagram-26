import {getRandomPositiveInteger, getRandomArrayElement, RandomGenerator} from './util.js';
import {NAMES, SURNAMES, MESSAGE, MAX_COMMENTS_COUNT, MIN_COMMENTS_COUNT, MAX_LIKES_COUNT, PHOTO_COUNT} from './constants.js';

const commentIdGenerator = new RandomGenerator(PHOTO_COUNT * MAX_COMMENTS_COUNT);
const getComment = (avatarId) => ({
  id: commentIdGenerator.next(),
  avatar: `img/avatar-${avatarId}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
});

const photoCardIdGenerator = new RandomGenerator(PHOTO_COUNT);
const photoIdGenerator = new RandomGenerator(PHOTO_COUNT);
const getPhotoCard = () => {
  const avatarIdGenerator = new RandomGenerator(6);
  const getAvatar = () => avatarIdGenerator.next();
  return {
    id: photoCardIdGenerator.next(),
    url: `photos/photo-${photoIdGenerator.next()}.jpg`,
    description: `description ${getRandomPositiveInteger(0, MAX_LIKES_COUNT)}`,
    likes: getRandomPositiveInteger(0, MAX_LIKES_COUNT),
    comments: Array.from({length: getRandomPositiveInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)}, () => getComment(getAvatar())),
  };
};

const getPhotoCards = () => Array.from({length: PHOTO_COUNT}, getPhotoCard);

export {getPhotoCards};
