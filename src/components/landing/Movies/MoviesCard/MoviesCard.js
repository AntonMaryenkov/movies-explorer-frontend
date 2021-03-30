import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  const cardLike = (
    `movies-card__like ${props.isLiked ? 'movies-card__like_active' : ''}`
  );

  function getTimeFromMins(min) {
    let hours = Math.trunc(min / 60);
    let minutes = min % 60;
    if (hours > 0) {
      return hours + 'ч ' + minutes + 'м';
    }
    return minutes + 'м';
  };

  function onClickImg() {
    if (props.pageSavedMovies) {
      return window.open(props.trailer);
    }

    window.open(props.trailerLink);
  };

  function handleLikeClick() {
    if (props.isLiked) {
      props.deleteMovie(props.id);

    } else {
      props.saveMovie(props);
    }
  };

  function handleButtonDeleteClick() {
    props.deleteMovie(props.movieId);
  };

  return (
    <div className="movies-card">
      {!props.pageSavedMovies ?
        <img className="movies-card__img" src={`https://api.nomoreparties.co${props.image && props.image.url}`} onClick={onClickImg} alt=""></img>
        :
        <img className="movies-card__img" src={props.image} onClick={onClickImg} alt=""></img>
      }
      <div className="movies-card__container_title-like">
        <h6 className="movies-card__title">{props.nameRU}</h6>
        {!props.pageSavedMovies ?
          <button className={cardLike} onClick={handleLikeClick}></button>
          :
          <button className="movies-card__button-delete" onClick={handleButtonDeleteClick}></button>}
      </div>
      <p className="movies-card__time">{getTimeFromMins(props.duration)}</p>
    </div>

  );
}

export default MoviesCard;
