import React from "react";
import { connect } from "react-redux";
import FullImage from "./FullImage";
import "./Item.css";

function mapStateToProps(state) {
  return {
    items: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function (itemName) {
      return dispatch({ type: "INCREASE", itemName: itemName });
    },
    decreaseCount: function (itemName) {
      return dispatch({ type: "DECREASE", itemName: itemName });
    },
    addToCart: function (item) {
      return dispatch({ type: "ADD_TO_CART", item: item });
    },
  };
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showItemFullImage: false,
    };
  }
  handleShowItemFullImage = () => {
    this.setState({
      showItemFullImage: !this.state.showItemFullImage,
    });
  };
  render() {
    return (
      <div className="item">
        <div className="item-image-container">
          <img
            className="item-image"
            src={this.props.itemImage}
            alt={this.props.itemImage}
          />
          <div
            className="item-show-full-image"
            onClick={() =>
              this.handleShowItemFullImage(
                this.props.item.id,
                this.props.section
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </div>
        </div>

        <div className="item-name">{this.props.item.name}</div>

        <div className="item-description">
          <p className="item-ingredients">{this.props.item.ingredients}</p>
          <p>Weight: {this.props.item.weight}g</p>
          <p>Price: {this.props.item.price}mdl</p>
        </div>
        <div>
          <div className="counter-and-order">
            <div className="counter">
              {this.props.items[this.props.item.name] !== undefined &&
              this.props.items[this.props.item.name].addedToCart ? (
                <button className="counter-button-inactive">+</button>
              ) : (
                <button
                  className="counter-button"
                  onClick={() => this.props.increaseCount(this.props.item.name)}
                >
                  +
                </button>
              )}
              <div className="counter-value">
                {this.props.items[this.props.item.name] !== undefined &&
                  this.props.items[this.props.item.name].counter}
              </div>
              {this.props.items[this.props.item.name] !== undefined &&
              this.props.items[this.props.item.name].addedToCart ? (
                <button className="counter-button-inactive">+</button>
              ) : (
                <button
                  className="counter-button"
                  onClick={() => this.props.decreaseCount(this.props.item.name)}
                >
                  -
                </button>
              )}
            </div>
            {this.props.items[this.props.item.name] !== undefined &&
            this.props.items[this.props.item.name].addedToCart ? (
              <button className="item-order-button-inactive">Added</button>
            ) : (
              <button
                className="item-order-button"
                onClick={() => this.props.addToCart(this.props.item)}
              >
                Add
              </button>
            )}
          </div>
        </div>
        {this.state.showItemFullImage && (
          <FullImage
            image={this.props.itemImage}
            handleShowItemFullImage={this.handleShowItemFullImage}
          />
        )}
      </div>
    );
  }
}

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Item);

export default connectedComponent;
