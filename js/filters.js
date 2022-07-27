import {shuffle, throttle} from './util.js';
import {TIMING} from './constants.js';

const filters = document.querySelector('.img-filters');
const form = filters.querySelector('.img-filters__form');
const formButtons = filters.querySelectorAll('.img-filters__button');


const initFilters = (cards, cb) => {
  filters.classList.remove('img-filters--inactive');

  const doFiltering = throttle((element) => {

    if (element.target) {
      formButtons.forEach((formButton) => {
        if (formButton !== element.target) {
          formButton.classList.remove('img-filters__button--active');
        } else {
          formButton.classList.add('img-filters__button--active');
        }
      });

    }

    switch (element.target.id) {
      case 'filter-discussed': {
        const sortedCards = cards.slice();
        sortedCards.sort((a, b) => b.comments.length - a.comments.length);
        cb(sortedCards);
        break;
      }
      case 'filter-random': {
        const shuffledCards = cards.slice();
        shuffle(shuffledCards);
        cb(shuffledCards.splice(0, 10));
        break;
      }
      case 'filter-default': {
        cb(cards);
      }
    }
  }, TIMING);

  form.addEventListener('click', doFiltering);
  cb(cards);
};

export {initFilters};
