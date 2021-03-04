import React from 'react';
import './Footer.css';

function Footer(props) {

  return (
    <footer className="footer">
      <p className="footer__promo-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020</p>
        <ul className="footer__links">
          <li><a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a className="footer__link" href="https://github.com/AntonMaryenkov" target="_blank" rel="noreferrer">Github</a></li>
          <li><a className="footer__link" href="https://www.facebook.com/viasacro" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
