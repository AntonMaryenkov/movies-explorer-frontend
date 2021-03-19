import React, { useEffect } from 'react';
import '../AuthForm.css';
import Form from '../../Form';
import logo from '../../../../../images/logo.svg';
import InputAuth from '../../InputAuth/InputAuth';
import Preloader from '../../../Preloader/Preloader';
import { useInput } from '../../../../../utils/Validation/Validation';

function Register(props) {
  const [preloader, setPreloader] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState('');

  const name = useInput('', ({ isEmpty: true, minLengthError: 2, maxLengthError: 30 }));
  const email = useInput('', ({ isEmpty: true, emailError: false }));
  const password = useInput('', ({ isEmpty: true, minLengthError: 8 }));

  function handleSubmit() {
    setPreloader(true);
    setShowButton(false);
    props.onRegister(name.value, email.value, password.value)
      .catch(() => {
        setFormMessage('Неверные данные для регистрации. Попробуйте ещё.');
        setPreloader(false);
        setShowButton(true);
      })
  };

  useEffect(() => {
    if (!email.inputValid && !password.inputValid && !name.inputValid) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [email.inputValid, password.inputValid, name.inputValid]);

  return (
    <div className="auth">
      <div className="auth__form-container">
        <img className="form__logo" src={logo} alt="логотип"></img>
        <Form
          title="Добро пожаловать!"
          buttonName="Зарегистрироваться"
          linkText="Уже зарегистрированы?"
          linkName="Войти"
          linkRoute="/signin"
          onSubmit={handleSubmit}
          showButton={showButton}
          preloader={preloader}
          formMessage={formMessage}>
          <InputAuth
            name="name"
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            onChange={name.onChange}
            onFocus={name.onFocus}
            isDirty={name.isDirty}
            value={name.value}
            valid={name}
            isDisabled={preloader} required />
          <InputAuth
            name="email"
            type="email"
            placeholder="Email"
            onChange={email.onChange}
            onFocus={email.onFocus}
            isDirty={email.isDirty}
            value={email.value}
            valid={email}
            isDisabled={preloader} required />
          <InputAuth
            name="password"
            type="password"
            minLength="8"
            placeholder="Пароль"
            onChange={password.onChange}
            onFocus={password.onFocus}
            isDirty={password.isDirty}
            value={password.value}
            valid={password}
            isDisabled={preloader} required />
        </Form>
      </div>
    </div>
  );
}

export default Register;
