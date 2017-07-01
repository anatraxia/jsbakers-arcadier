// Import Components
import React, { Component } from 'react';

// Import CSS
import './Categories.css';

/**
 * Categories
 */
export class Categories extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
    <div className="row CategoriesRow">
      <div className="col-md-12">
        <a href="#">Dresses</a>
          <ul>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
          </ul>
        <a href="#">Shoes</a>
          <ul>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
          </ul>
        <a href="#">Bags</a>
          <ul>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
            <li>Some static search result</li>
          </ul>
      </div>
    </div>
    );
  }
}

export default Categories;
