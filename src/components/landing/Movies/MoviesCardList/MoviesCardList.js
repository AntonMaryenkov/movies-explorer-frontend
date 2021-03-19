import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList(props) {

  const moviesCardList = (
    `movies-card-list ${props.savedMovies ? 'movies-card-list_saved' : ''}`
  );

  return (
    <div className="movies-card-list__container">
      {props.preloader &&
        <Preloader />}
      {props.messageError &&
      <span className="movies-card-list__message-error">{props.messageError}</span>
      }
      <div className={moviesCardList}>
        {!props.pageSavedMovies &&
          props.movies.map(({ id, ...itemProps }) => <MoviesCard key={id} id={id} {...itemProps} saveMovie={props.saveMovie} deleteMovie={props.deleteMovie} />)
        }
        {props.pageSavedMovies &&
          props.movies.map(({ _id, ...itemProps }) => <MoviesCard key={_id} id={_id} {...itemProps} saveMovie={props.saveMovie} deleteMovie={props.deleteMovie} pageSavedMovies={props.pageSavedMovies} />)
        }
      </div>
      {props.showButtons &&
        <button className="movies-card-list__button" onClick={props.nextPageMovies}>Ещё</button>}
    </div>
  );
}

export default MoviesCardList;
