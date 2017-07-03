// Import Components
import React, { Component } from 'react';

// Import CSS
import './Categories.css';

/**
 * Categories
 */
export class Categories extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categoryID:"",
      subCategories: []
    }
  }
  generateSubCat = () => {
    let childCat = this.props.subcategories
    let subCatArray = []
    for(var i=0; i < childCat.length; i++){
        subCatArray.push(<li><a href="#">{childCat[i].Name}</a></li>)
    }
    return subCatArray
  }
  render() {

    let subCatArray = this.generateSubCat()
    return (
    <div className="row CategoriesRow">
      <div className="col-md-12">
        <a href={"#"+this.props.id}>{this.props.name}</a>
        <ul>
          {subCatArray}
        </ul>
      </div>
    </div>
    );
  }
}

export default Categories;
