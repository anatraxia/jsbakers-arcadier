// Import Components
import React, { Component } from 'react';

// Import CSS
import './Items.css';

/**
 * Items
 */
export class Items extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
        <div className="col-md-12">
          <ul>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
          </ul>
        </div>
    );
  }
}

export default Items;
