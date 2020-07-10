import React from "react";
import ShoppingCart from "../utils/icons/ShoppingCart";
import Money from "../utils/icons/Money";
import AddedItems from "../utils/icons/AddedItems";
import "./CartBox.css";

function CartBox(props) {
  return (
    <div className="cart-box" onClick={props.handleShowCartModal}>
      <div className="front">
        <p>
          <ShoppingCart/>
        </p>
      </div>
      <div className="back">
        <div>
          <p>My Cart</p>
        </div>
      </div>
    </div>
  );
}

export default CartBox;
