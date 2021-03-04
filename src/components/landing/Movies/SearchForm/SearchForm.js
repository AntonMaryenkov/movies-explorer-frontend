import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

  return (
    <div className="search-form">
      <div className="search-form__container">
        <label className="search-form__field search-form__field_search">
          <input className="search-form__input" type="search" placeholder="Фильм"></input>
          <button className="search-form__button" type="submit"></button>
        </label>
        <label className="search-form__field search-form__field_checkbox">
          <p className="search-form__checkbox-name">Короткометражки</p>
          <input className="search-form__checkbox" type="checkbox"></input>
          <div className="search-form__switch"></div>
        </label>
      </div>
    </div>
  );
}

export default SearchForm;
