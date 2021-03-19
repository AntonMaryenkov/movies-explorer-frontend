import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import * as MoviesApi from '../../../utils/MoviesApi';
import * as constants from '../../../utils/constants';
import { filterMovies } from "../../../utils/helpers";

function Movies(props) {
  const [preloader, setPreloader] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');
  const [moviesList, setMoviesList] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(0);

  const [startCountMovies, setStartCountMovies] = React.useState(0);
  const [countPerPage, setCountPerPage] = React.useState(0);

  const [shortFilm, setShortFilm] = React.useState(false);

  const [searchString, setSearchString] = React.useState('');

  const [showButtons, setShowButtons] = React.useState(false);

  React.useEffect(() => {
    function addCards() {
      if (window.innerWidth > 1100) {
        setStartCountMovies(12);
        setCountPerPage(4);
      }
      if (window.innerWidth <= 1100) {
        setStartCountMovies(12);
        setCountPerPage(3);
      }
      if (window.innerWidth <= 768) {
        setStartCountMovies(8);
        setCountPerPage(2);
      }
      if (window.innerWidth <= 425) {
        setStartCountMovies(5);
        setCountPerPage(2);
      }
    }

    addCards();

    let timerId;

    function updateSize() {
      if (!timerId) {
        timerId = setTimeout(() => {
          timerId = null;
          addCards();
        }, 2000);
      }
    };

    window.addEventListener('resize', updateSize);

    if (localStorage.getItem(constants.MOVIES_LOCAL_SEARCH)) {
      setSearchString(localStorage.getItem(constants.MOVIES_LOCAL_SEARCH));
    }

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', updateSize);
    }
  }, []);

  function nextPageMovies() {
    if (moviesList.length > 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  function toggleShowButton(movies) {
    if (startCountMovies + currentPage * countPerPage >= movies.length || movies.length === 0) {
      setShowButtons(false);
    } else {
      setShowButtons(true);
    }
  };

  React.useEffect(() => {
    setMessageError('')
    let movies = filterMovies(props.movies, searchString, shortFilm, props.savedMovies);
    if (movies.length === 0) {
      setMessageError('Ничего не найдено');
    }
    setMoviesList(movies);
    toggleShowButton(movies);
  }, [props.savedMovies, props.movies, shortFilm, searchString]);

  React.useEffect(() => {

    toggleShowButton(moviesList);

  }, [currentPage]);

  function onSearchSubmit(searchString) {
    setMessageError('');
    setPreloader(true);
    if (!props.movies.length) {
      MoviesApi.getMovies()
        .then((res) => {
          if (res.length === 0) {
            return setMessageError('Ничего не найдено');
          }
          localStorage.setItem(constants.MOVIES_LOCAL_SEARCH, searchString);
          localStorage.setItem(constants.MOVIES_LOCAL_KEY, JSON.stringify(res));
          props.setMovies(res);
          setSearchString(searchString);
        })
        .catch((err) => {
          console.log(err);
          setMessageError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => {
          setPreloader(false);
        })
    } else {
      let movies = filterMovies(props.movies, searchString, shortFilm, props.savedMovies);
      localStorage.setItem(constants.MOVIES_LOCAL_SEARCH, searchString);
      if (movies.length === 0) {
        setMessageError('Ничего не найдено');
      }
      setMoviesList(movies);
      setSearchString(searchString);
      setPreloader(false);
    }
    setCurrentPage(0);
  };

  function saveMovie(data) {
    setPreloader(true);
    props.saveMovie(data)
      .finally(() => {
        setPreloader(false);
      })
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
        searchSubmit={onSearchSubmit}
        setShortFilm={setShortFilm}
        shortFilm={shortFilm}
        searchString={searchString} />
      <MoviesCardList
        pageSavedMovies={props.pageSavedMovies}
        movies={moviesList.slice(0, startCountMovies + currentPage * countPerPage)}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        nextPageMovies={nextPageMovies}
        showButtons={showButtons}
        messageError={messageError}
        preloader={preloader} />
    </div>
  );
}

export default Movies;
