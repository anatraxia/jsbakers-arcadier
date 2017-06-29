// Import Components
import React, { Component } from 'react';

// Import CSS
import './App.css';

// Import components
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';

/**
 * App
 */
class App extends Component {
  render() {
    return (
      <div className="container">
      <Header title="Arcadier - JS Bakers"/>
      <Cart/>
      <Footer/>
      </div>
    );
  }
}

export default App;
