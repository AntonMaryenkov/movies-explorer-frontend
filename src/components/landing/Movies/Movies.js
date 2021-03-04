import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const [preloader, setPreloader] = React.useState(false);

  return (
    <div className="movies">
      {preloader &&
        <Preloader />}
      <SearchForm />
      <MoviesCardList savedMovies={props.savedMovies} />
    </div>
  );
}

export default Movies;
