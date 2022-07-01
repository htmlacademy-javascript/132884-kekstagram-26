const bigPictureElement = document.querySelector('.big-picture');
const closedBigPicture = document.querySelector('.big-picture__cancel');

const bigImage = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');

const socialComents = bigPictureElement.querySelector('.social__comment');
const socialComent = bigPictureElement.querySelector('.social__comment').cloneNode(true);
const comentsCount = bigPictureElement.querySelector('.comments-count');
const socialCaption = bigPictureElement.querySelector('.social__caption');

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

const close = () => {
  bigPictureElement.classList.add('hidden');
  document.body.removeEventListener('keydown', addEscapeCloseHandler);
  document.body.style.overflow = 'auto';
};

const showBigPicture = (item) => {
  bigPictureElement.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  addEscapeCloseHandler();
  replaceComments(item.comments);

  bigImage.src = item.url;
  likesCount.textContent = item.likes;
  socialCaption.textContent = item.description;

  closedBigPicture.addEventListener('click', () => {
    close();
  }, {once: true});
};

function addEscapeCloseHandler () {
  document.body.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      close();
    }
  });
}

export {showBigPicture};
