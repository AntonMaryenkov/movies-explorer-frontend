import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Preloader from '../../landing/Preloader/Preloader';

function Form(props) {

  const formTitle = (
    `form__title ${props.loggedIn ? 'form__title_profile' : ''}`
  );

  function setReadOnly() {
    props.setReadOnly(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {props.preloader &&
        <Preloader />}
      <div>
        <h6 className={formTitle}>{props.title}</h6>
        {props.children}
      </div>
      <div className="form__nav">
        {!props.loggedIn &&
          <div>
            {props.formMessage &&
              <span className="form__message">{props.formMessage}</span>
            }
            {!props.showButton &&
              <button disabled className="form__button">{props.buttonName}</button>
            }
            {props.showButton &&
              <button className="form__button form__button_active">{props.buttonName}</button>
            }
            <div className="form__container_link">
              <p className="form__link-text">{props.linkText}</p>
              <Link to={props.linkRoute} className="form__link">{props.linkName}</Link>
            </div>
          </div>
        }
        {props.loggedIn &&
          <div className="form__nav-profile">
            {props.formMessage &&
              <span className="form__message">{props.formMessage}</span>
            }
            {props.readOnly &&
              <div className="form__nav-edit">
                <button className="form__button-profile" onClick={setReadOnly}>{props.buttonName}</button>
                <div className="form__container_link">
                  <button className="form__button-profile form__link-profile" onClick={props.onSignOut}>{props.linkName}</button>
                </div>
              </div>
            }
            {props.showButton && !props.readOnly &&
              <button className="form__button form__button_active">{props.buttonNameSave}</button>
            }
            {!props.showButton && !props.readOnly &&
              <button disabled className="form__button">{props.buttonNameSave}</button>
            }
          </div>
        }
      </div>
    </form>
  );
}

export default Form;
