/* globals React $ */
// Import Components
import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import Items from '../Items/Items';
import Search from '../Search/Search';

// Import CSS
import './Cart.css';


/**
 * Cart
 */
export class Cart extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      items: []
    }
  }

  getSearchString = (searchInputStr) => {

  }

  getAllConsumerItems = () => {
    var url = 'http://anyorigin.com/go?url=https://gateaubread.sandbox.arcadier.io/api/consumers/items/search&callback=?';
    var itemsArray = [];
    $.getJSON(url, (data) => {
      for(var i=0 ; i < data.contents.length; i++)
      itemsArray.push(data.contents[i])
      this.setState({
        items: itemsArray
      })
    })
  }

  renderItems = () => {
    console.log(this.state.items);
    var itemArray = [];

    for(var i=0;i<this.state.items.length;i++){
      itemArray.push(<Items key={this.state.items[i].ID} name={this.state.items[i].ItemName}/>)
    }
    return itemArray;
  }

  getCategories = () => {
    var url = 'http://anyorigin.com/go?url=https%3A//gateaubread.sandbox.arcadier.io/api/consumers/categories%3FtopRows%3D2&callback=?';
    var categoryArray = this.state.categories
    $.getJSON(url, (data) => {
      for(var i =0 ; i < data.contents.length; i++)
      categoryArray.push(data.contents[i])
      this.setState({
        categories: categoryArray
      })
    })
  }

  renderCategories = () => {
    var categoryArray = []

    for(var i = 0 ;  i < this.state.categories.length;  i++){
      categoryArray.push(<Categories key={this.state.categories[i].ID} name={this.state.categories[i].Name} subcategories={this.state.categories[i].ChildCategories}/>)
    }

    return categoryArray
  }
  componentWillMount(){
      this.getCategories()
      this.getAllConsumerItems();
  }



  render() {
    let itemRows = this.renderItems();
    let categoriesRow = this.renderCategories();

    return (
      <div className="row cartOverallDiv">

        <div className="col-md-4 categoriesContainer">
          {categoriesRow}
        </div>

        <div className="col-md-8 searchContainer">
          <Search getSearchString={this.getSearchString}/>
          {itemRows}
        </div>

      </div>
    );
  }
}

export default Cart;
