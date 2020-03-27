import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

Button.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string,
};

function Button({ click, text }) {
  return (
    <button
      className="Button-search"
      onClick={ click }
    >
      { text }
    </button>
  );
}

Button.defaultProps = {
  click: () => {},
  text: 'Button',
}

export default Button;
