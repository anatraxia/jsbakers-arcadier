// Import Components
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import CSS
import './Header.css';

/**
 * Header
 */
export class Header extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="row headerRow">
        <div className="col-md-12">
          <h1 className="header">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

// Declare datatypes for this.prop variables
Header.propTypes = {
  title: PropTypes.string
}

export default Header;
