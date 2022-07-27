import {showBigPicture} from './pictures-bigger.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createPicture = (item) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = item.url;
  picture.querySelector('.picture__comments').textContent = item.comments.length;
  picture.querySelector('.picture__likes').textContent = item.likes;

  picture.addEventListener('click', () => showBigPicture(item));

  return picture;
};

const createPictures = (items) => {
  const pictures = document.createDocumentFragment();

  items.forEach((item) => {
    pictures.append(createPicture(item));
  });

  return pictures;
};

const drawPictures = (items) => {
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  picturesContainer.append(createPictures(items));
};

export {drawPictures};
