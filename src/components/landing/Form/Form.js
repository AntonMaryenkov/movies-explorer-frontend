import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Form(props) {

  const formTitle = (
    `form__title ${props.loggedIn ? 'form__title_profile' : ''}`
  );

  function setReadOnly() {
    props.setReadOnly(false)
  }

  return (
    <form className="form">
      <div>
        <h6 className={formTitle}>{props.title}</h6>
        {props.children}
      </div>
      <div className="form__nav">
        {!props.loggedIn &&
          <div>
            <span className="form__error">Что-то пошло не так...</span>
            <button className="form__button">{props.buttonName}</button>
            <div className="form__container_link">
              <p className="form__link-text">{props.linkText}</p>
              <Link to={props.linkRoute} className="form__link">{props.linkName}</Link>
            </div>
          </div>
        }
        {props.loggedIn &&
          <div className="form__nav-profile">
            <span className="form__error">Что-то пошло не так...</span>
            {props.readOnly &&
              <button className="form__button-profile" onClick={setReadOnly}>{props.buttonName}</button>
            }
            {!props.readOnly &&
              <button className="form__button form__button_active">{props.buttonNameSave}</button>
            }
            <div className="form__container_link">
              <Link to={props.linkRoute} className="form__link-profile">{props.linkName}</Link>
            </div>
          </div>
        }
      </div>
    </form>
  );
}

export default Form;
