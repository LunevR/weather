import React, { Component } from 'react';
import './index.css';
import moment from 'moment';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-city">
          { this.props.city || 'City' }
        </div>
        <div className="Header-date">{ moment().format('dddd DD MMMM') }</div>
      </div>
    );
  }
}

export default Header;
