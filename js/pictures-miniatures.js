import {showBigPicture} from './pictures-bigger.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

const createPicture = (item) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = item.url;
  pictureElement.querySelector('.picture__comments').textContent = item.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = item.likes;

  pictureElement.addEventListener('click', () => showBigPicture(item));

  return pictureElement;
};

const createPictures = (items) => {
  const pictures = document.createDocumentFragment();

  items.forEach((item) => {
    pictures.append(createPicture(item));
  });

  return pictures;
};

const drawPictures = (items) => {
  picturesContainer.append(createPictures(items));
  picturesContainer.querySelectorAll('.picture').forEach((item, index, pictures) => {
    pictures[index].addEventListener('click', () => showBigPicture(item));
  });
};

export {drawPictures};
