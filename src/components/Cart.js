import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, remove, addMore } from '../actions/cartActions';

class Cart extends Component {
  render() {
    const cartList = this.props.cart.map(( item, index) => {
      return <tbody key={index} style={{width: '100%'}}>
        <tr>
          <td>{item.name}</td>
          <td>{item.price} USD</td>
          <td>
            <span style={{border: '2px solid #ccc', borderRadius: '5px'}}>
            <input type='button' value='+' style={{cursor: 'pointer', border: 'none'}} onClick={ () => this.props.addMore(item)} />
            <span style={{padding: '10px'}}>{item.quantity}</span>
            <input type='button' value='-' style={{cursor: 'pointer', border: 'none'}} onClick={ () => this.props.remove(item)}/>
            </span>
          </td>
          <td>{item.price * item.quantity} USD</td>
          <td><input type='button' value='-' style={{cursor: 'pointer', border: 'none', borderRadius: '10px', color: 'white', background: '#aaa'}} onClick={ () => this.props.removeFromCart(item)} /></td>        
        </tr>
      </tbody>
    });

    var totalAmount = 0;
    this.props.cart.map(( item, index) => {
      totalAmount = totalAmount + item.price * item.quantity
    });

    return (
      <div>
        <div style={{textAlign: 'left', margin: '5px'}}>Cart</div>
        <div className="cart">
          <table id="cart_table" style={{width: '100%', minWidth: '100%'}}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            {cartList}
            { totalAmount > 0 &&
              <tfoot>
                <tr>
                  <td>Total Amount:</td>
                  <td>{totalAmount}</td>
                </tr>
              </tfoot>
            }
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item)),
        remove: item => dispatch(remove(item)),
        addMore: item => dispatch(addMore(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
