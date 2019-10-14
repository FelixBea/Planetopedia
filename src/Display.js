import React from 'react';
import './Display.css';

function Display() {
  return (
    <div>
      <span>
        {this.props.content}
      </span>
    </div>
  );
}

export default Display;
