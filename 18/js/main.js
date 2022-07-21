import './form.js';
import './scale.js';
import {drawPictures} from './pictures-miniatures.js';
import {getData} from './api.js';
import {initFilters} from './filters.js';

document.addEventListener('DOMContentLoaded', async () => {
  const cards = await getData();

  if (cards) {
    initFilters(cards, (filtersCards) => {
      drawPictures(filtersCards);
    });
  }
});
