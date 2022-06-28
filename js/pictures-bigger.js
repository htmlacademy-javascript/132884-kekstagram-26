const bigPictureElement = document.querySelector('.big-picture');
const closedBigPicture = document.querySelector('.big-picture__cancel');
//const socialComents = document.querySelector('.social__comment');
//const likesCount = document.querySelector('.likes-count');
//const comentsCount = document.querySelector('.comments-count');
//const socialCaption = document.querySelector('.social__caption');

//likesCount.querySelector('.likes-count') = textContent = item.likes(5);
//comentsCount.querySelector('.comments-count') = textContent = item.comments.length(5);
//socialCaption.querySelector('..social__caption') = textContent = item.description;

/*

*/

const showBigPicture = (item) => {
  bigPictureElement.querySelector('.big-picture__img img').src = item.url;
  bigPictureElement.classList.remove('hidden');

  closedBigPicture.addEventListener('click', () => {
    bigPictureElement.classList.add('hidden');
  }, {once: true});
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPictureElement.classList.add('hidden');
  }
});

export {showBigPicture};
