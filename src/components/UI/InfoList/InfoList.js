import React from 'react';
import './InfoList.css';

function InfoList(props) {
  const infos = [];

  if (props.list) {
    let info;
    let key = 0;
    for(info in props.list) {
      infos.push(
        <li key={key}>
          {info}: {props.list[info]}
        </li>
      );
      key++;
    }
  }

  return (
    <ul className="info-list">
      {infos}
    </ul>
  );
}

export default InfoList;
