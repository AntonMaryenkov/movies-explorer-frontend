import React from 'react';
import Title from '../Title/Title';
import './AboutProject.css';

function AboutProject(props) {

  return (
    <div id="about-project" className="about-project">
      <Title title="О проекте" />
      <div className="about-project__info">
        <div className="about-project__info_block">
          <h3 className="about-project__info_title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info_block">
          <h3 className="about-project__info_title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
      </div>
      <div className="about-project__time">
        <div className="about-project__time_column about-project__time_column-back">
          <p className="about-project__time-text about-project__time-text_back">1 неделя</p>
          <p className="about-project__tech about-project__tech_back">Back-end</p>
        </div>
        <div className="about-project__time_column about-project__time_column-front">
          <p className="about-project__time-text about-project__time-text_front">4 недели</p>
          <p className="about-project__tech about-project__tech_front">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
