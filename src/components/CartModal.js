import React from "react"
import CartItem from './CartItem'
import "./CartModal.css"
import { connect } from 'react-redux'

function mapStateToProps(state) {
  console.log("redux  from cart item", state);
  return {
    items: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: function (itemName) {
      return dispatch({ type: "DELETE_ITEM", itemName: itemName });
    },
  };
}

function CartModal(props) {
  let foodNames =  Object.keys(props.items).filter(x => props.items[x].hasOwnProperty("addedToCart"))
  let myArr = []
  foodNames.forEach(x => myArr.push({[x]: props.items[x]}))

  let counters = []
  myArr.map(item => {
    Object.keys(item).map(x => counters.push(item[x].counter))
  })

  let itemsToAdd = []
  myArr.map(itemToAdd => {
    props.allItems.map(item => {
      let itemName = Object.keys(itemToAdd)[0]
      console.log(itemName)
      if (item.name === itemName) {
        itemsToAdd.push(item)
      }
    })
  })

  let totalCost = 0
  itemsToAdd.map((item, index) => {
    totalCost += item.price * counters[index]
  })

  return (
    <div className="cart-modal-background">
      <div className="cart-modal">
        <div className="cart-header">
          <p>My Cart</p>
          <svg
            onClick={props.handleShowCartModal}
            className="close-button"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
          </svg>
        </div>
        <div className="cart-body">
          {
            itemsToAdd.map((item, i) => {
              let index = props.allItems.indexOf(item)
              return <CartItem 
                item={item}
                image={props.allImages[index]}
                entities={counters[i]}
              />
            })
          }
        </div>
        <div className="cart-footer">
          <p>
            Total cost: <span>{totalCost} </span>mdl
          </p>
          <button className="confirm-order-button">Order</button>
        </div>
      </div>
    </div>
  )
        }

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export default connectedComponent;
