import './form.js';
import './scale.js';
import {drawPictures} from './pictures-miniatures.js';
import {getData} from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const cards = await getData();
  drawPictures(cards);
});

