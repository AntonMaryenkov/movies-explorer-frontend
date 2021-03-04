import React from 'react';
import './PopupNavigation.css';

function PopupNavigation(props) {

  let popupNavigation = 'popup';
  console.log(props.isOpen)
  if (props.isOpen) {
    popupNavigation += ' popup_is-opened';
  }

  return (
    <div className="popup__overlay">
      <div className={`${popupNavigation}`}>
      </div>
    </div>
  );
}

export default PopupNavigation;
