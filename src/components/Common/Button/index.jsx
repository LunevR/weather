import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  render() {
    return (
      <button
        className="Button-search"
        onClick={ this.props.click }
      >
        { this.props.text || 'Button' }
      </button>
    );
  }
}

export default Button;
