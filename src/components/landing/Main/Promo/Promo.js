import React from 'react';
import logo from '../../../../images/promo-logo.png';
import './Promo.css';

function Promo(props) {

  return (
    <div className="promo">
      <div className="promo__info-container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__link" href="#about-project">Узнать больше</a>
      </div>
      <img className="promo__logo" src={logo} alt=""></img>
    </div>
  );
}

export default Promo;
