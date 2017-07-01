/* globals React $ */
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
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  getAllConsumerItems = () => {
    var url = 'http://anyorigin.com/go?url=https://gateaubread.sandbox.arcadier.io/api/consumers/items/search&callback=?';
    $.getJSON(url, function(data){
      console.log("Consumer Data: "+JSON.stringify(data));
    })
  }

  getCategories = () => {
    var url = 'http://anyorigin.com/go?url=https://gateaubread.sandbox.arcadier.io/api/consumers/categories%3FtopRows%3D2&callback=?';
    $.getJSON(url, function(data){
      console.log("Catagories Data: "+JSON.stringify(data));
    })

  }

  render() {
    this.getCategories();
    this.getAllConsumerItems();
    return (
      <div className="row cartOverallDiv">

        <div className="col-md-4 categoriesContainer">
            <Categories categories={this.getCategories}/>
        </div>

        <div className="col-md-8 searchContainer">
          <Search/>
        </div>

      </div>
    );
  }
}

export default Cart;
