import {getPhotoCards} from './data.js';
import './form.js';
import './scale.js';
import {drawPictures} from './pictures-miniatures.js';

const cards = getPhotoCards();
drawPictures(cards);
