import {getPhotoCards} from './data.js';
import {showUploadForm} from './form.js';
import {drawPictures} from './pictures-miniatures.js';

const cards = getPhotoCards();
drawPictures(cards);

document.querySelector('#upload-file').addEventListener('change', () => {
  showUploadForm();
});
