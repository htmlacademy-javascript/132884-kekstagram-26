export const initPopup = (element, {closeSelector = '.cancel', hiddenClass = 'hidden', onClose, capture = false} = {}) => {
  const closeElement = element.querySelector(closeSelector);

  const addCloseHandlers = () => {
    document.body.addEventListener('keydown', escapeCloseHandler, capture);
    closeElement?.removeEventListener('click', closeHandler);
  };

  const removeCloseHandlers = () => {
    document.body.removeEventListener('keydown', escapeCloseHandler, capture);
    closeElement?.removeEventListener('click', closeHandler);
  };

  const openPopup = () => {
    element.classList.remove(hiddenClass);
    document.body.style.overflow = 'hidden';
    addCloseHandlers();
  };

  const closePopup = (evt) => {
    element.classList.add(hiddenClass);
    document.body.style.overflow = 'hidden';
    removeCloseHandlers();
    if(onClose) {
      onClose(evt);
    }
  };

  function closeHandler (evt) {
    closePopup(evt);
  }

  function escapeCloseHandler (evt) {
    //evt.preventDefault();
    if(evt.key === 'Escape') {
      closePopup();
    }
  }

  return {openPopup, closePopup};
};
