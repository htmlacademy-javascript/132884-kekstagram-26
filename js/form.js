import {initPopup} from './popup.js';

const uploadOverlayElement = document.querySelector('.img-upload__overlay');

const {openPopup} = initPopup(uploadOverlayElement);

const showUploadForm = () => {
  openPopup();
};

export {showUploadForm};
