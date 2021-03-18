export const BASE_URL = 'https://api.nomoreparties.co';

export const getMovies = (token) => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    });
};
