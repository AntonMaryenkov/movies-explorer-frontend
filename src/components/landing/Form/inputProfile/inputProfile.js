import React from 'react';
import './inputProfile.css';

function inputProfile(props) {

  return (
    <label className="input-profile__field">
      <input className="input-profile__input" type={props.type} value={props.value} onChange={props.onChange} minLength={props.minLength} maxLength={props.maxLength} placeholder={props.placeholder} readOnly={props.readOnly} disabled={props.isDisabled} required></input>
      <h6 className="input-profile__name">{props.name}</h6>
      <span className="input-profile__error">
        {props.isDirty && props.valid.isEmpty && props.valid.messageError}
        {!props.valid.isEmpty && props.valid.minLengthError && props.valid.messageError}
        {!props.valid.isEmpty && props.valid.maxLengthError && props.valid.messageError}
        {!props.valid.isEmpty && props.valid.emailError && props.valid.messageError}
      </span>
    </label>
  );
}

export default inputProfile;
