import {initPopup} from './popup.js';
import {LOAD_COMMENTS} from './constants.js';
import './effects.js';


const bigPicture = document.querySelector('.big-picture');

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
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
  const commentTemplate = socialComent.cloneNode(true);
  commentTemplate.querySelector('.social__picture').src = comment.avatar;
  commentTemplate.querySelector('.social__picture').alt = comment.name;
  commentTemplate.querySelector('.social__text').textContent = comment.message;
  return commentTemplate;
};

const createComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentsFragment.append(createComment(comment));
  });

  return commentsFragment;
};

let showNextCommentsPage;
const replaceComments = (comments) => {
  clearComments();
  const maxCount = comments.length;
  const totalPages = Math.ceil(maxCount / LOAD_COMMENTS);
  let page = 1;

  commentsLoader.classList.remove('hidden');

  showNextCommentsPage = () => {
    socialComents.appendChild(createComments(comments.slice((page - 1) * LOAD_COMMENTS, LOAD_COMMENTS * page)));
    socialCommentCount.textContent = `${Math.min(page * LOAD_COMMENTS, maxCount)} из ${maxCount} коментариев`;
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

  bigPictureImg.src = item.url;
  likesCount.textContent = item.likes;
  socialCaption.textContent = item.description;
};

export {showBigPicture};
