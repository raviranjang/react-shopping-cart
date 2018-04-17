import React, { Component } from 'react';
import Products from './Products';
import Cart from './Cart';
import '../styles/App.css';

class App extends Component {
  render() {   
    return (
      <div className="App">
        <Cart/>
        <div style={{display: 'flex', margin: '10px'}}>Products</div>
        <Products/>        
      </div>
    );
  }
}

export default App;



