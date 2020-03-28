import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

Button.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

function Button({ click, text, disabled }) {
  return (
    <button
      className="Button-search"
      onClick={ click }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}

Button.defaultProps = {
  click: () => {},
  text: 'Button',
  disabled: false,
}

export default Button;
