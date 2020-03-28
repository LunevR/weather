import React from 'react';
import PropTypes from 'prop-types';

Type.propTypes = {
  type: PropTypes.string,
};

function Type({ type }) {
  if (type) {
    return (
      <img
        src={ 'https://www.metaweather.com/static/img/weather/' + type + '.svg' }
        alt={ type }
      />
    );
  } else {
    return false;
  }
}

Type.defaultProps = {
  type: '',
}

export default Type;
