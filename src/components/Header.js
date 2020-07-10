import React from "react";
import Logo from "./Logo";
import Carousel from "./Carousel";
import TopRightBoxes from "./CartBox";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header" ref={this.props.headerRef}>
        <div className="header-left-part">
          <Logo/>
        </div>
        <div className="header-right-part">
          <Carousel />
        </div>
        <TopRightBoxes 
        handleShowCartModal={this.props.handleShowCartModal} 
        totalCost={this.props.totalCost}
        numberOfItems={this.props.numberOfItems}
        />
      </div>
    );
  }
}

export default Header;
