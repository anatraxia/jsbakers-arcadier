// Import Components
import React, { Component } from 'react';

// Import CSS
import './Footer.css';

/**
 * Footer
 */
export class Footer extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h5 className="footer">JS Bakers(implemented with Arcadier) - All rights reserved</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
