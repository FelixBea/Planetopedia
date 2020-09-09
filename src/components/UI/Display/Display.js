import React from 'react';
import './Display.css';

function Display(props) {
  return (
    <div>
      <span>{props.content}</span>
    </div>
  );
}

export default Display;
