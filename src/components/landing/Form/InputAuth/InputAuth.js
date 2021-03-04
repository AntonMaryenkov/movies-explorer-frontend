import React from 'react';
import './InputAuth.css';

function InputAuth(props) {

  return (
    <label className="input-auth__field">
      <h6 className="input-auth__name">{props.name}</h6>
      <input className="input-auth__input" type={props.type} minLength={props.minLength} maxLength={props.maxLength} placeholder={props.placeholder} required></input>
      <span className="input-auth__error">Что-то пошло не так...</span>
    </label>
  );
}

export default InputAuth;
