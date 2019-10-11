import React from 'react';
import './ActionButton.css';

function ActionButton() {
  return (
    <button OnClick={this.props.handleClick} type="button" >
      {this.props.label}
    </button>
  );
}

export default ActionButton;
