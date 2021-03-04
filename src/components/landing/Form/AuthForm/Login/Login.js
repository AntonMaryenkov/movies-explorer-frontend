import React from 'react';
import '../AuthForm.css';
import Form from '../../Form';
import Input from '../../InputAuth/InputAuth';
import logo from '../../../../../images/logo.svg';
import Preloader from '../../../Preloader/Preloader';

function Login(props) {

  const [preloader, setPreloader] = React.useState(false);

  return (
    <div className="auth">
      {preloader &&
        <Preloader />}
      <div className="auth__form-container">
        <img className="form__logo" src={logo} alt="логотип"></img>
        <Form title="Рады видеть!" buttonName="Войти" linkText="Ещё не зарегистрированы?" linkName="Регистрация" linkRoute="/signup">
          <Input name="E-mail" type="email" placeholder="Email" />
          <Input name="Пароль" type="password" placeholder="Пароль" />
        </Form>
      </div>
    </div>
  );
}

export default Login;
