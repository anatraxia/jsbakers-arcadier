// Import Components
import React, { Component } from 'react';
import Items from '../Items/Items';

// Import CSS
import './Search.css';

/**
 * Search
 */
export class Search extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
  <section>
    <div className="row searchBarRow">
      <div className="col-md-12 searchBar">
        <input type="text"
               name="searchText"
               className="input-lg searchInputField"
               placeholder="Search for items here..."/>
        <button type="button"
                className="btn btn-lg btn-primary">Search</button>
      </div>
    </div>
    <div className="row searchBarResults">
    <Items/>
    </div>
  </section>
    );
  }
}

export default Search;
