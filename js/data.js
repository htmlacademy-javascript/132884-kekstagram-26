import {getRandomPositiveInteger, getRandomArrayElement, makeRandomGenerator} from './util.js';
import {NAMES, SURNAMES, MESSAGE, MAX_COMMENTS_COUNT, MIN_COMMENTS_COUNT, MAX_LIKES_COUNT, PHOTO_COUNT} from './constants.js';

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

export {getPhotoCards,};
