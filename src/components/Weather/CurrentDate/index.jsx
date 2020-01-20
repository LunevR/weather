import React, { Component } from 'react';
import './index.css';

class CurrentDate extends Component {
  render() {
    return (
      <div className="Current-date">
        <div className="Current-date-main">
          <div className="Current-date-degree">{ this.props.temp || 'X' }&#176;</div>
          <div className="Current-date-type">
            <img
              src={ this.props.img ? 'https://www.metaweather.com/static/img/weather/' + this.props.img + '.svg' : '' }
              alt=""
            />
          </div>
        </div>
        <div className="Current-date-info">
          <span>Min { this.props.minTemp || 'X' }&#176;</span>
          <span>Max { this.props.maxTemp || 'X' }&#176;</span>
          <span>Wind { this.props.wind || 'X' } м/с { this.props.windDirection || '' }</span>
        </div>
      </div>
    );
  }
}

export default CurrentDate;
