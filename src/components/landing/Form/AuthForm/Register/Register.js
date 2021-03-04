import React from 'react';
import '../AuthForm.css';
import Form from '../../Form';
import logo from '../../../../../images/logo.svg';
import Input from '../../InputAuth/InputAuth';
import Preloader from '../../../Preloader/Preloader';

function Register(props) {

  const [preloader, setPreloader] = React.useState(false);

  return (
    <div className="auth">
      {preloader &&
        <Preloader />}
      <div className="auth__form-container">
        <img className="form__logo" src={logo} alt="логотип"></img>
        <Form title="Добро пожаловать!" buttonName="Зарегистрироваться" linkText="Уже зарегистрированы?" linkName="Войти" linkRoute="/signin">
          <Input name="Имя" minLength="2" maxLength="30" placeholder="Имя" />
          <Input name="E-mail" type="email" placeholder="Email" />
          <Input name="Пароль" type="password" minLength="8" placeholder="Пароль" />
        </Form>
      </div>
    </div>
  );
}

export default Register;
