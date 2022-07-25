import {showError} from './messages.js';
import {GET_RESPONCE_URL, SEND_RESPONCE_URL} from './constants.js';

const getData = async () => {
  try {
    const response = await fetch(
      GET_RESPONCE_URL,
    );

    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    return await response.json();
  } catch (error) {
    showError(error.message);
  }
};

const sendData = async (body) => {
  const response = await fetch(
    SEND_RESPONCE_URL,
    {
      method: 'POST',
      body,
    }
  );

  if (!response.ok) {
    throw new Error('Не удалось отправить форму. Попробуйте еще раз.');
  }

  return response;
};

export {getData, sendData};
