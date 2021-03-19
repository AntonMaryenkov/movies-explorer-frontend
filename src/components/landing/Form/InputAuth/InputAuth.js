import React from 'react';
import './InputAuth.css';

function InputAuth(props) {

  return (
    <label className="input-auth__field">
      <h6 className="input-auth__name">{props.name}</h6>
      <input disabled={props.isDisabled} onFocus={props.onFocus} className="input-auth__input" onChange={props.onChange} value={props.value} type={props.type} minLength={props.minLength} maxLength={props.maxLength} placeholder={props.placeholder} required></input>
      <span className="input-auth__error">
        {props.isDirty && props.valid.isEmpty && props.valid.messageError}
        {!props.valid.isEmpty && props.valid.minLengthError && props.valid.messageError}
        {!props.valid.isEmpty && props.valid.maxLengthError && props.valid.messageError}
        {!props.valid.isEmpty && props.valid.emailError && props.valid.messageError}
      </span>
    </label>
  );
}

export default InputAuth;
