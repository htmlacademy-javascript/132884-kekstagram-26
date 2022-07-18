const getData = async (onSuccess, onFail) => {
  try {
    const responce = await fetch(
      'https://26.javascript.pages.academy/kekstagram/data'
    );

    if (!responce.ok) {
      throw new Error('Не удалось загрузить обьявления');
    }

    const offers = await responce.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const responce = await fetch(
      'Не удалось загрузить обьявления',
      {
        method: 'POST',
        body,
      }
    );

    if (!responce.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте еще раз.');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export {getData, sendData};
