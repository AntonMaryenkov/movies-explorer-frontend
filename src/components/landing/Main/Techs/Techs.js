import React from 'react';
import './Techs.css';
import Title from "../Title/Title";

function Techs(props) {

  return (
    <div className="techs">
      <Title title="Технологии" />
      <h4 className="techs__title">7 технологий</h4>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__list">
        <div className="techs__element">HTML</div>
        <div className="techs__element">CSS</div>
        <div className="techs__element">JS</div>
        <div className="techs__element">React</div>
        <div className="techs__element">Git</div>
        <div className="techs__element">Express.js</div>
        <div className="techs__element">mongoDB</div>
      </div>
    </div>
  );
}

export default Techs;
