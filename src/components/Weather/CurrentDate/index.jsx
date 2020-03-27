import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

CurrentDate.propTypes = {
  img: PropTypes.string,
  temp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  wind: PropTypes.number,
  windDirection: PropTypes.string,
};

function CurrentDate({ img, temp, minTemp, maxTemp, wind, windDirection }) {
  if (img) {
    img = <img
      src={ 'https://www.metaweather.com/static/img/weather/' + img + '.svg' }
      alt={ img }
    />
  }

  return (
    <div className="Current-date">
      <div className="Current-date-main">
        <div className="Current-date-degree">{ temp }&#176;</div>
        <div className="Current-date-type">{ img }</div>
      </div>
      <div className="Current-date-info">
        <span>Min { minTemp }&#176;</span>
        <span>Max { maxTemp }&#176;</span>
        <span>Wind { wind } м/с { windDirection }</span>
      </div>
    </div>
  );
}

CurrentDate.defaultProps = {
  img: '',
  temp: 0,
  minTemp: 0,
  maxTemp: 0,
  wind: 0,
  windDirection: '-',
}

export default CurrentDate;
