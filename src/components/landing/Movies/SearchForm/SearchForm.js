import React from 'react';
import './SearchForm.css';
import { useInput } from '../../../../utils/Validation/Validation';


function SearchForm(props) {
  const [showButton, setShowButton] = React.useState(false);
  const [searchMessage, setSearchMessage] = React.useState('');

  const searchString = useInput(props.searchString, { isEmpty: true });

  function handleSubmit(e) {
    e.preventDefault();
    if (searchString.inputValid) {
      setSearchMessage('Нужно ввести ключевое слово');
    } else {
      props.searchSubmit(searchString.value);
    }
  };

  function searchForShortFilms() {
    if (props.shortFilm) {
      return props.setShortFilm(false);
    }
    return props.setShortFilm(true);
  };

  React.useEffect(() => {
    if (!searchString.inputValid) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [searchString.inputValid]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <label className="search-form__field search-form__field_search">
          <input className="search-form__input" type="search" placeholder="Фильм" onChange={searchString.onChange} onFocus={searchString.onFocus} value={searchString.value} valid={searchString}></input>
          {!showButton &&
            <button className="search-form__button search-form__button_disabled" type="submit"></button>}
          {showButton &&
            <button className="search-form__button" type="submit"></button>}
          {searchMessage &&
            <span className="search-form__message">{searchMessage}</span>
          }
        </label>
        <label className="search-form__field search-form__field_checkbox">
          <p className="search-form__checkbox-name">Короткометражки</p>
          <input className="search-form__checkbox" type="checkbox" onChange={searchForShortFilms}></input>
          <div className="search-form__switch"></div>
        </label>
      </div>

    </form>
  );
}

export default SearchForm;
