/* globals React $ */
// Import Components
import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import SearchResults from '../SearchResults/SearchResults';
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
      items: [],
      searchResults: []
    }
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

  getSearchString = (searchInputStr) => {
      var searchResultsArray = [];
      searchResultsArray = this.state.items.filter((item) => {
        var newString = item.ItemName.toLowerCase();
        return newString.includes(searchInputStr.toLowerCase());
      })
      if (searchResultsArray.length === 0) {alert('Search yielded no results');}
      this.setState({searchResults: searchResultsArray});
  }

  renderSearchResults = () => {
    console.log(this.state.searchResults);
    var resultsArray = [];

    for(var i=0;i<this.state.searchResults.length;i++){
      resultsArray.push(<SearchResults key={this.state.searchResults[i].ID} name={this.state.searchResults[i].ItemName}/>)
    }
    return resultsArray;
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
    let searchResults = this.renderSearchResults();
    let categoriesRow = this.renderCategories();

    return (
      <div className="row cartOverallDiv">

        <div className="col-md-4 categoriesContainer">
          {categoriesRow}
        </div>

        <div className="col-md-8 searchContainer">
          <Search getSearchString={this.getSearchString}/>
          {searchResults}
        </div>

      </div>
    );
  }
}

export default Cart;
