import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import moment from 'moment';

Header.propTypes = {
  city: PropTypes.string,
};

function Header({ city }) {
  return (
    <div className="Header">
      <div className="Header-city">
        { city }
      </div>
      <div className="Header-date">{ moment().format('dddd DD MMMM') }</div>
    </div>
  );
}


Header.defaultProps = {
  city: 'City',
}

export default Header;
