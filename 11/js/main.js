import {getPhotoCards} from './data.js';
import {drawPictures} from './pictures-miniatures.js';

const cards = getPhotoCards();
drawPictures(cards);
