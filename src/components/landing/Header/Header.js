import React from 'react';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
    const header = (
    `header ${props.loggedIn ? 'header_logged' : ''}`
  );

  return (
    <header className={header}>
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <Navigation loggedIn={props.loggedIn}/>
      </div>
    </header>
  );
}

export default Header;
