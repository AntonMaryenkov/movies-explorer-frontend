import React from 'react';
import './Profile.css';
import Header from '../../Header/Header';
import Form from '../Form';
import InputProfile from '../inputProfile/inputProfile';
import Preloader from '../../Preloader/Preloader';

function Profile(props) {

  const [readOnly, setReadOnly] = React.useState(true);

  const [preloader, setPreloader] = React.useState(false);

  return (
    <div className="profile">
      {preloader &&
        <Preloader />}
      <Header loggedIn={props.loggedIn} />
      <div className="profile__form-container">
        <Form title="Привет, Виталий!" buttonName="Редактировать" buttonNameSave="Сохранить" linkName="Выйти из аккаунта" linkRoute="/" loggedIn={props.loggedIn} readOnly={readOnly} setReadOnly={setReadOnly}>
          <InputProfile name="Имя" minLength="2" maxLength="30" placeholder="Имя" readOnly={readOnly} setReadOnly={setReadOnly} />
          <div className="profile__border"></div>
          <InputProfile name="Email" type="email" placeholder="Почта" readOnly={readOnly} setReadOnly={setReadOnly} />
        </Form>
      </div>
    </div>
  );
}

export default Profile;
