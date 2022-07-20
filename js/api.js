import {showError} from './messages.js';

const getData = async () => {
  try {
    const response = await fetch(
      'https://26.javascript.pages.academy/kekstagram/data',
    );

    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    return await response.json();
  } catch (error) {
    showError(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://26.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body,
      }
    );

    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте еще раз.');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export {getData, sendData};
