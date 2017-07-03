/* globals React $ */
// Import Components
import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import uuid from 'uuid'

// Import CSS
import './Cart.css';


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
    console.log(this.state.categories);
    for(var i = 0 ;  i < this.state.categories.length;  i++){
      categoryArray.push(<Categories key={uuid.v4()} id={this.state.categories[i].ID} name={this.state.categories[i].Name} subcategories={this.state.categories[i].ChildCategories}/>)
    }
    console.log(categoryArray)
    return categoryArray
  }
  componentWillMount(){
      this.getCategories()
  }

  render() {
    // this.getCategories()
    // this.getAllConsumerItems();
    let categoriesRow = this.renderCategories()
    console.log(categoriesRow);
    return (
      <div className="row cartOverallDiv">

        <div className="col-md-4 categoriesContainer">
          {categoriesRow}
        </div>

        <div className="col-md-8 searchContainer">
          <Search/>
        </div>

      </div>
    );
  }
}

export default Cart;
