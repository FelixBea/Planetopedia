import React from 'react';
import './ActionButton.css';

function ActionButton(props) {
  return (
    <button onClick={props.handleClick} type="button" >
      {props.label}
    </button>
  );
}

export default ActionButton;
