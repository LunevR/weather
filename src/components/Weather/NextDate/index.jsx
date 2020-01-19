import React from 'react';
import './index.css';

function NextDate(props) {
  const {day} = props;
  return (
    <div className="Next-date">
      <div className="Next-date-main">
        <div className="Next-date-day">{ day } Jan.</div>
        <div className="Next-date-degree">10&#176;</div>
        <div className="Next-date-type"></div>
      </div>
      <div className="Next-date-info">
        <span>Min 1&#176;</span>
        <span>Max 5&#176;</span>
        <span>Wind 2м/с &#8593;</span>
      </div>
    </div>
  );
}

export default NextDate;
