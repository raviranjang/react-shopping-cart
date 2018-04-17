import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Products extends Component {

  render() {
    const productList = this.props.products.map( (item,index)  => {
      return <div key={index} style={{border: '2px solid #3a3a3a', margin: '5px', padding: '10px'}}> 
        <p style={{ color: "#767676"}}>{item.name}</p>
        <p style={{ color: "#767676"}}>{item.price} USD </p>
        <button type="button" className="add_cart" onClick={() => this.props.addToCart(item)}>
          Add To Cart
        </button>
      </div>
    });

    return (
      <div className= "products">
         { productList }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

