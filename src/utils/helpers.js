export function filterMovies(data, searchString, shortFilm, savedMovies) {

  let movies = data.filter((el) => el.nameRU.toLowerCase().includes(searchString));
  if (savedMovies) {
    movies.forEach(item => {
      item.isLiked = savedMovies.some(savedMovie => {
        return item.id === savedMovie.movieId;
      });
    })
  }
  if (shortFilm) {
    movies = movies.filter((el) => el.duration <= 40);
  }
  return movies;
};
