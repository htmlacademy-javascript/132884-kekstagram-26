const bigPictureElement = document.querySelector('.big-picture');
const closedBigPicture = document.querySelector('.big-picture__cancel');

const bigImage = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');

const socialComents = bigPictureElement.querySelector('.social__comment');
const socialComent = bigPictureElement.querySelector('.social__comment').cloneNode(true);
const comentsCount = bigPictureElement.querySelector('.comments-count');
const socialCaption = bigPictureElement.querySelector('.social__caption');

//comentsCount.querySelector('.comments-count') = textContent = item.comments.length(5);
//socialCaption.querySelector('..social__caption') = textContent = item.description;

const clearComments = () => {
  socialComents.innerHTML = '';
};

const createComment = (comment) => {
  const commentElement = socialComent.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const createComments = (comments) => {
  const commentElements = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentElements.append(createComment(comment));
  });

  return commentElements;
};

const replaceComments = (comments) => {
  clearComments();
  socialComents.appendChild(createComments(comments));
  comentsCount.textContent = comments.length;
};

const showBigPicture = (item) => {
  bigPictureElement.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  replaceComments(item.comments);

  bigImage.src = item.url;
  likesCount.textContent = item.likes;
  socialCaption.textContent = item.description;

  closedBigPicture.addEventListener('click', () => {
    bigPictureElement.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, {once: true});
};

/*const close = () => {
  bigPictureElement.classList.add('hidden');
  document.body.removeEventListener('keydown', addEscapeCloseHandler);
};

function addEscapeCloseHandler () {
  document.body.addEvantListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      close();
    }
  });
}*/

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPictureElement.classList.add('hidden');
  }
});

export {showBigPicture};
