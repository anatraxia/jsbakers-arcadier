// Import Components
import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';

// Import CSS
import './Cart.css';

// Import UUID
import uuid from 'uuid'

/**
 * Cart
 */
export class Cart extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="row cartOverallDiv">

        <div className="col-md-4 categoriesContainer">
          <Categories/>
        </div>

        <div className="col-md-8 searchContainer">
          <Search/>
        </div>

      </div>
    );
  }
}

export default Cart;
