import React, { Component } from 'react';
import './index.css';

class CurrentDate extends Component {
  render() {
    let img = '';

    if (this.props.img) {
      img = <img
        src={ 'https://www.metaweather.com/static/img/weather/' + this.props.img + '.svg' }
        alt=""
      />
    }
    return (
      <div className="Current-date">
        <div className="Current-date-main">
          <div className="Current-date-degree">{ this.props.temp || '-' }&#176;</div>
          <div className="Current-date-type">
            { img }
          </div>
        </div>
        <div className="Current-date-info">
          <span>Min { this.props.minTemp || '-' }&#176;</span>
          <span>Max { this.props.maxTemp || '-' }&#176;</span>
          <span>Wind { this.props.wind || '-' } м/с { this.props.windDirection || '-' }</span>
        </div>
      </div>
    );
  }
}

export default CurrentDate;
