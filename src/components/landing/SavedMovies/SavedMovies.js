import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import * as constants from '../../../utils/constants';
import { filterMovies } from "../../../utils/helpers";

function SavedMovies(props) {
  const [messageError, setMessageError] = React.useState('');
  const [preloader, setPreloader] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState([]);

  const [shortFilm, setShortFilm] = React.useState(false);

  const [searchString, setSearchString] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem(constants.SAVEDMOVIES_LOCAL_SEARCH)) {
      setSearchString(localStorage.getItem(constants.SAVEDMOVIES_LOCAL_SEARCH));
    }
  }, []);

  React.useEffect(() => {
    setMessageError('');
    let movies = filterMovies(props.savedMovies, searchString, shortFilm);
    if (movies.length === 0) {
      setMessageError('Ничего не найдено');
    }
    setMoviesList(movies);
  }, [shortFilm, props.savedMovies]);

  function searchSubmit(searchString) {
    setMessageError('');
    let movies = filterMovies(props.savedMovies, searchString, shortFilm);
    if (movies.length === 0) {
      setMessageError('Ничего не найдено');
    }
    setMoviesList(movies);
    localStorage.setItem(constants.SAVEDMOVIES_LOCAL_SEARCH, searchString);
    setSearchString(searchString);
  };

  function deleteMovie(id) {
    setPreloader(true);
    props.deleteMovie(id)
      .finally(() => {
        setPreloader(false);
      });
  };

  return (
    <div className="movies">
      <SearchForm
        searchSubmit={searchSubmit}
        setShortFilm={setShortFilm}
        shortFilm={shortFilm}
        searchString={searchString} />
        <MoviesCardList
          pageSavedMovies={props.pageSavedMovies}
          movies={moviesList}
          deleteMovie={deleteMovie}
          messageError={messageError}
          preloader={preloader} />

    </div>
  );
}

export default SavedMovies;
