import React from 'react';
import './index.css';

function CurrentDate() {
  return (
    <div className="Current-date">
      <div className="Current-date-main">
        <div className="Current-date-degree">10&#176;</div>
        <div className="Current-date-type"></div>
      </div>
      <div className="Current-date-info">
        <span>Min 1&#176;</span>
        <span>Max 5&#176;</span>
        <span>Wind 2м/с &#8593;</span>
      </div>
    </div>
  );
}

export default CurrentDate;
