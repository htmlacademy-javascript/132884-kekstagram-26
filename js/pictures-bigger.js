const bigPictureElement = document.querySelector('.big-picture');
const minPictureElement = document.querySelectorAll('.picture');
const closedBigPicture = document.querySelector('.cancel');

const showBigPicture = () => {
  minPictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureElement.classList.toggle('hidden');
    closedBigPicture.classList.toggle('hidden');
  });
};

export {showBigPicture};
