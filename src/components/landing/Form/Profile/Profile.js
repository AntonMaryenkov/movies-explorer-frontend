import React from 'react';
import './Profile.css';
import { CurrentUser } from '../../../../contexts/CurrentUser';
import Form from '../Form';
import InputProfile from '../inputProfile/inputProfile';
import Preloader from '../../Preloader/Preloader';
import { useInput } from '../../../../utils/Validation/Validation';

function Profile(props) {

  const currentUser = React.useContext(CurrentUser);

  const [preloader, setPreloader] = React.useState(false);
  const [readOnly, setReadOnly] = React.useState(true);
  const [showButton, setShowButton] = React.useState(false);
  const [changeValue, setChangeValue] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState('');

  const name = useInput(currentUser.name, ({ isEmpty: true, minLengthError: 2, maxLengthError: 30 }));
  const email = useInput(currentUser.email, ({ isEmpty: true, emailError: false }));

  function handleSubmit() {
    setPreloader(true);
    setShowButton(false);
    props.Auth.addUserInfo(name.value, email.value)
      .then((data) => {
        props.setCurrentUser(data);
        setReadOnly(true);
        setFormMessage('Редактирование прошло успешно');
      })
      .catch((err) => {
        setFormMessage('При обновлении профиля произошла ошибка');
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  React.useEffect(() => {
    if (name.value === currentUser.name
      && email.value === currentUser.email) {
      return setShowButton(false);
    }
    if (!email.inputValid && !name.inputValid) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [email.inputValid, name.inputValid, name.value, email.value]);

  React.useEffect(() => {
    if (name.isDirty || email.isDirty) {
      setChangeValue(true);
    }
  }, [email.value, name.value]);

  return (
    <div className="profile">
      <div className="profile__form-container">
        <Form
          title={`Привет, ${currentUser.name}!`}
          buttonName="Редактировать"
          buttonNameSave="Сохранить"
          linkName="Выйти из аккаунта"
          linkRoute="/"
          loggedIn={props.loggedIn}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
          onSignOut={props.onSignOut}
          onSubmit={handleSubmit}
          showButton={showButton}
          changeValue={changeValue}
          formMessage={formMessage}
          preloader={preloader}>
          <InputProfile
            name="Имя"
            minLength="2"
            maxLength="30"
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            onChange={name.onChange}
            onFocus={name.onFocus}
            isDirty={name.isDirty}
            value={name.value}
            valid={name}
            isDisabled={preloader} />
          <div className="profile__border"></div>
          <InputProfile
            name="Email"
            type="email"
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            onChange={email.onChange}
            onFocus={email.onFocus}
            isDirty={email.isDirty}
            value={email.value}
            valid={email}
            isDisabled={preloader} />
        </Form>
      </div>
    </div>
  );
}

export default Profile;
