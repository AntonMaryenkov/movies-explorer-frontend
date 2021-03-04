import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const moviesCardList = (
    `movies-card-list ${props.savedMovies ? 'movies-card-list_saved' : ''}`
  );

  return (
    <div className="movies-card-list__container">
      <div className={moviesCardList}>
        <MoviesCard savedMovies={props.savedMovies} />
        <MoviesCard savedMovies={props.savedMovies} />
        <MoviesCard savedMovies={props.savedMovies} />
        <MoviesCard savedMovies={props.savedMovies} />
        <MoviesCard savedMovies={props.savedMovies} />
        <MoviesCard savedMovies={props.savedMovies} />
      </div>
      {!props.savedMovies &&
        <button className="movies-card-list__button">Ещё</button>}
    </div>
  );
}

export default MoviesCardList;
