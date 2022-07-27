import {initPopup} from './popup.js';
import './effects.js';


const bigPicture = document.querySelector('.big-picture');

const bigImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');

const socialComents = bigPicture.querySelector('.social__comments');
const socialComent = bigPicture.querySelector('.social__comment').cloneNode(true);
const comentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

socialCommentCount.classList.remove('hidden');

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

let showNextCommentsPage;
const replaceComments = (comments) => {
  clearComments();
  const maxCount = comments.length;
  const onPage = 5;
  const totalPages = Math.ceil(maxCount / onPage);
  let page = 1;

  commentsLoader.classList.remove('hidden');

  showNextCommentsPage = () => {
    socialComents.appendChild(createComments(comments.slice((page - 1) * onPage, onPage * page)));
    socialCommentCount.textContent = `${Math.min(page * onPage, maxCount)} из ${maxCount} коментариев`;
    page++;
    if (page > totalPages) {
      commentsLoader.classList.add('hidden');
    }
  };
  showNextCommentsPage();

  commentsLoader.addEventListener('click', showNextCommentsPage);
  comentsCount.textContent = maxCount;
};

const {openPopup} = initPopup(bigPicture, {
  onClose: () => {
    commentsLoader.removeEventListener('click', showNextCommentsPage);
  }
});

const showBigPicture = (item) => {
  openPopup();
  replaceComments(item.comments);

  bigImage.src = item.url;
  likesCount.textContent = item.likes;
  socialCaption.textContent = item.description;
};

export {showBigPicture};
