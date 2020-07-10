import React from "react";
import { connect } from "react-redux";

import "./CartItem.css";

function mapStateToProps(state) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: function (item) {
      return dispatch({ type: "REMOVE_FROM_CART", item: item });
    }
  };
}

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-item-header">
          <img className="cart-item-header" src={this.props.image} alt="" />
        </div>
        <div className="cart-item-body">
          <p className="cart-item-name">{this.props.item.name}</p>
          <p className="cart-item-weight">{this.props.item.weight}g</p>
          <p className="cart-item-ingredients">
            {this.props.item.ingredients}
          </p>
        </div>
        <div className="cart-body-footer">
          <p>{this.props.entities}</p>
          <p className="cart-item-price">{this.props.item.price} mdl</p>
          <button 
          className="cart-item-delete-button"
          onClick={() => this.props.removeFromCart(this.props.item)}
          >Delete</button>
        </div>
      </div>
    );
  }
}

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CartItem);

export default connectedComponent;