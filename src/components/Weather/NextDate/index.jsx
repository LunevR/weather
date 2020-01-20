import React, { Component } from 'react';
import './index.css';
import moment from 'moment';

class NextDate extends Component {
  render() {
    return (
      <div className="Next-date">
        <div className="Next-date-main">
          <div className="Next-date-day">{ moment().add(this.props.dayDiff, 'days').format('DD MMM') }</div>
          <div className="Next-date-degree">{ this.props.temp || '-' }&#176;</div>
          <div className="Next-date-type">
            <img
              src={ this.props.img ? 'https://www.metaweather.com/static/img/weather/' + this.props.img + '.svg' : '' }
              alt=""
            />
          </div>
        </div>
        <div className="Next-date-info">
          <span>Min { this.props.minTemp || '-' }&#176;</span>
          <span>Max { this.props.maxTemp || '-' }&#176;</span>
          <span>Wind { this.props.wind || '-' } м/с { this.props.windDirection || '' }</span>
        </div>
      </div>
    );
  }
}

export default NextDate;
