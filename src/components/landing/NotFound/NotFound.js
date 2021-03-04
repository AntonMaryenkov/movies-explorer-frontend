import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound(props) {
  const history = useHistory();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__button_back" onClick={() => history.goBack()}>Назад</button>
    </div>
  );
}

export default NotFound;
