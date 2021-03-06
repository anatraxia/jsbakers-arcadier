// Import Components
import React, { Component, PropTypes } from 'react';

// Import CSS
import './SearchResults.css';

/**
 * Items
 */
export class SearchResults extends Component { // eslint-disable-line react/prefer-stateless-function
constructor(props) {
  super(props);
}
  render() {
    return (
      <div className="row searchResultsRow">
        <div className="col-md-12">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

export default SearchResults;
