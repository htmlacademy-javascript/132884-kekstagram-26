const bigPictureElement = document.querySelector('.big-picture');
const closedBigPicture = document.querySelector('.big-picture__cancel');

const showBigPicture = (item) => {
  bigPictureElement.querySelector('.big-picture__img').src = item.url;
  bigPictureElement.classList.toggle('hidden');

  closedBigPicture.addEventListener('click', () => {
    bigPictureElement.classList.toggle('hidden');
  });
};

export {showBigPicture};
