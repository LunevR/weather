import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Type from './../Type/index.jsx';
import './index.css';

NextDate.propTypes = {
  dayDiff: PropTypes.number,
  img: PropTypes.string,
  temp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  wind: PropTypes.number,
  windDirection: PropTypes.string,
};

function NextDate({ dayDiff, img, temp, minTemp, maxTemp, wind, windDirection }) {
  return (
    <div className="Next-date">
      <div className="Next-date-main">
        <div className="Next-date-day">{ moment().add(dayDiff, 'days').format('DD MMM') }</div>
        <div className="Next-date-degree">{ temp }&#176;</div>
        <div className="Next-date-type">
          <Type type={ img } />
        </div>
      </div>
      <div className="Next-date-info">
        <span>Min { minTemp }&#176;</span>
        <span>Max { maxTemp }&#176;</span>
        <span>Wind { wind } м/с { windDirection }</span>
      </div>
    </div>
  );
}

NextDate.defaultProps = {
  dayDiff: 0,
  img: '',
  temp: 0,
  minTemp: 0,
  maxTemp: 0,
  wind: 0,
  windDirection: '-',
}

export default NextDate;
