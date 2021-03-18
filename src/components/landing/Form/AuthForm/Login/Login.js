import React, { useEffect } from 'react';
import '../AuthForm.css';
import Form from '../../Form';
import InputAuth from '../../InputAuth/InputAuth';
import logo from '../../../../../images/logo.svg';
import { useInput } from '../../../../../utils/Validation/Validation';

function Login(props) {

  const [preloader, setPreloader] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState('');

  function handleSubmit() {
    setPreloader(true);
    setShowButton(false);
    props.onLogin(email.value, password.value)
      .catch(() => {
        setFormMessage('Неправильный логин или пароль');
        setPreloader(false);
        setShowButton(true);
      })
  };

  const email = useInput('', ({ isEmpty: true, emailError: false }));
  const password = useInput('', ({ isEmpty: true, minLengthError: 8 }));

  useEffect(() => {
    if (!email.inputValid && !password.inputValid) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [email.inputValid, password.inputValid])

  return (
    <div className="auth">
      <div className="auth__form-container">
        <img className="form__logo" src={logo} alt="логотип"></img>
        <Form
          title="Рады видеть!"
          buttonName="Войти"
          linkText="Ещё не зарегистрированы?"
          linkName="Регистрация"
          linkRoute="/signup"
          onSubmit={handleSubmit}
          showButton={showButton}
          preloader={preloader}
          formMessage={formMessage}>
          <InputAuth
            name="email"
            type="email"
            placeholder="Email"
            onChange={email.onChange}
            onFocus={email.onFocus}
            isDirty={email.isDirty}
            value={email.value}
            valid={email} required
            isDisabled={preloader} />
          <InputAuth
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={password.onChange}
            onFocus={password.onFocus}
            isDirty={password.isDirty}
            value={password.value}
            valid={password} required
            isDisabled={preloader} />
        </Form>
      </div>
    </div>
  );
}

export default Login;
