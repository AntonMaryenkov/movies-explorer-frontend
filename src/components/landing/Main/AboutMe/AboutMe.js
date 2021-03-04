import React from 'react';
import Title from '../Title/Title';
import './AboutMe.css';
import myPhoto from '../../../../images/aboutMePhoto.jpg';

function AboutMe(props) {

  return (
    <div className="about-me">
      <Title title="Студент" />
      <div className="about-me__container">
        <div className="about-me__info">
          <h5 className="about-me__title">Антон</h5>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__links">
            <li><a className="about-me__link" href="https://github.com/AntonMaryenkov" target="_blank" rel="noreferrer">Github</a></li>
            <li><a className="about-me__link" href="https://www.facebook.com/viasacro" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="моя фотография"></img>
      </div>
    </div>
  );
}

export default AboutMe;
