import React from 'react';
import './inputProfile.css';

function inputProfile(props) {

  return (
    <label className="input-profile__field">
      {props.readOnly &&
        <input className="input-profile__input" type={props.type} minLength={props.minLength} maxLength={props.maxLength} placeholder={props.placeholder} readOnly={true} required></input>
      }
      {!props.readOnly &&
        <input className="input-profile__input" type={props.type} minLength={props.minLength} maxLength={props.maxLength} placeholder={props.placeholder} required></input>
      }
      <h6 className="input-profile__name">{props.name}</h6>
      <span className="input-profile__error">Что-то пошло не так...</span>
    </label>
  );
}

export default inputProfile;
