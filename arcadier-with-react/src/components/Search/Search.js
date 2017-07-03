// Import Components
import React, { Component } from 'react';
import Items from '../Items/Items';
import {PropTypes} from 'react';

// Import CSS
import './Search.css';

/**
 * Search
 */
export class Search extends Component { // eslint-disable-line react/prefer-stateless-function

constructor(props) {
  super(props);
  this.state = {
    inputText: ""
  }
}

getInputData = (event) => {
  if(event.target.value !== "") {
    var inputValue = event.target.value;
  }
  this.setState({
    inputText: inputValue
  })
}

beginSearch = () => {
  var state = this.state;
  this.props.getSearchString(state.inputText);
  this.setState({inputText: ""})
}

  render() {
    return (
  <section>
    <div className="row searchBarRow">
      <div className="col-md-12 searchBar">
        <input type="text"
               name="searchText"
               className="input-lg searchInputField"
               placeholder="Search for items here..."
               value={this.state.inputText}
               onChange={this.getInputData}/>
        <button type="button"
                className="btn btn-lg btn-primary"
                onClick={this.beginSearch}>Search</button>
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
