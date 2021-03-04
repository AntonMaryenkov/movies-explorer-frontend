import React from 'react';
import './MoviesCard.css';
import img1 from '../../../../images/1.jpg';

function MoviesCard(props) {

  const [like, setLike] = React.useState(false)

  const cardLike = (
    `movies-card__like ${like ? 'movies-card__like_active' : ''}`
  );

  function handleLikeClick() {
    setLike(true);
  }

  return (
    <div className="movies-card">
      <img className="movies-card__img" src={img1} alt=""></img>
      <div className="movies-card__container_title-like">
        <h6 className="movies-card__title">33 слова о дизайне</h6>
        {!props.savedMovies ?
          <button className={cardLike} onClick={handleLikeClick}></button>
          :
          <button className="movies-card__button-delete"></button>}
      </div>
      <p className="movies-card__time">1ч42м</p>
    </div>

  );
}

export default MoviesCard;
