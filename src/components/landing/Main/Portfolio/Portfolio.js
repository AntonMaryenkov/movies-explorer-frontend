import React from 'react';
import './Portfolio.css';

function Portfolio(props) {

  return (
    <div className="portfolio">
      <h6 className="portfolio__title">Портфолио</h6>
      <ul className="portfolio__links">
        <li className="portfolio__link-element">
          <a className="portfolio__link" href="https://github.com/AntonMaryenkov/first-project" target="_blank" rel="noreferrer">
            <p className="portfolio__link_text">Статичный сайт</p>
            <div className="portfolio__link_icon"></div>
          </a>
        </li>
        <li className="portfolio__link-element">
          <a className="portfolio__link" href="https://antonmaryenkov.github.io/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__link_text">Адаптивный сайт</p>
            <div className="portfolio__link_icon"></div>
          </a>
        </li>
        <li className="portfolio__link-element">
          <a className="portfolio__link" href="https://mesto.antonmaryenkov.students.nomoredomains.icu" target="_blank" rel="noreferrer">
            <p className="portfolio__link_text">Одностраничное приложение</p>
            <div className="portfolio__link_icon"></div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
