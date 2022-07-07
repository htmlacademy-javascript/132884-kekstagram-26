export const initPopup = (element, closeSelector = '.cancel', hiddenClass = 'hidden') => {
  const closeElement = element.querySelector(closeSelector);

  const addCloseHandlers = () => {
    document.body.addEventListener('keydown', escapeCloseHandler);
    closeElement.addEventListener('click', closeHandler);
  };

  const removeCloseHandlers = () => {
    document.body.removeEventListener('keydown', escapeCloseHandler);
    closeElement.removeEventListener('click', closeHandler);
  };

  const openPopup = () => {
    element.classList.remove(hiddenClass);
    document.body.style.overflow = 'hidden';
    addCloseHandlers();
  };

  const closePopup = () => {
    element.classList.add(hiddenClass);
    document.body.style.overflow = 'hidden';
    removeCloseHandlers();
  };

  function closeHandler () {
    closePopup();
  }

  function escapeCloseHandler (evt) {
    //evt.preventDefault();
    if(evt.key === 'Escape') {
      closePopup();
    }
  }

  return {openPopup, closePopup};
};
