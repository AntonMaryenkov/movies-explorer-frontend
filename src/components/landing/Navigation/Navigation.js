import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import profileIcon from '../../../images/navigation-icon.svg'

function Navigation(props) {
  const [popupIsOpen, setPopupIsOpen] = React.useState(false)

  function openPopup() {
    setPopupIsOpen(true);
  }

  function closePopup() {
    setPopupIsOpen(false);
  }

  return (
    <div>
      <div className="navigation__container">
        {!props.loggedIn &&
          <div className="navigation">
            <NavLink to="/signup" className="navigation__button navigation__button_reg">Регистрация</NavLink>
            <NavLink to="/signin" className="navigation__button navigation__button_log">Войти</NavLink>
          </div>}
        {props.loggedIn &&
          <div className="navigation">
            <NavLink to="/movies" className="navigation__button navigation__button-logged" activeClassName="navigation__button_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation__button navigation__button-logged" activeClassName="navigation__button_active">Сохранённые фильмы</NavLink>
            <NavLink to="/profile" className="navigation__button navigation__button-profile">
              <img className="navigation__profile-icon" src={profileIcon} alt="иконка-человек"></img>
              <p className="navigation__button-profile_text">Аккаунт</p>
            </NavLink>
          </div>}
      </div>
      {props.loggedIn &&
        <button className="navigation__icon" type="button" onClick={openPopup}></button>}
      {popupIsOpen &&
        <div className="navigation__popup-overlay">
          <div className="navigation__popup">
            <button className="navigation__close-icon" type="button" onClick={closePopup}></button>
            <div className="navigation__popup-container">
              <NavLink exact to="/" className="navigation__button navigation__button-logged navigation__button-logged_popup" activeClassName="navigation__button-popup_active" onClick={closePopup}>Главная</NavLink>
              <NavLink to="/movies" className="navigation__button navigation__button-logged navigation__button-logged_popup" activeClassName="navigation__button-popup_active" onClick={closePopup}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className="navigation__button navigation__button-logged navigation__button-logged_popup" activeClassName="navigation__button-popup_active" onClick={closePopup}>Сохранённые фильмы</NavLink>
            </div>
            <NavLink to="/profile" className="navigation__button navigation__button-profile navigation__button-profile_popup" onClick={closePopup}>
              <img className="navigation__profile-icon" src={profileIcon} alt="иконка-человек"></img>
              <p className="navigation__button-profile_text">Аккаунт</p>
            </NavLink>
          </div>
        </div>
      }
    </div>
  );
}

export default Navigation;
