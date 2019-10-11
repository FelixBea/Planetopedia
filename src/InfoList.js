import React from 'react';
import './InfoList.css';

function InfoList() {
  const infos = [];

  for(info in this.props.list) {
    infos.push(
      <li>
        {info}: {this.props.list[info]}
      </li>
    );
  }

  return (
    <ul>
      {infos}
    </ul>
  );
}

export default InfoList;
