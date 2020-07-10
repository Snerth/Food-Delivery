import React from "react";
import boxgrill from "../utils/images/Box Grill.png";
import boxmeat from "../utils/images/Box Meat.png";
import wings from "../utils/images/Wings.png";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  slideForward = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === 2) activeIndex = 0;
    else activeIndex = activeIndex + 1;
    this.setState({
      activeIndex: activeIndex,
    });
  };
  slideBack = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === 0) activeIndex = 2;
    else activeIndex = activeIndex - 1;
    this.setState({
      activeIndex: activeIndex,
    });
  };
  render() {
    return (
      <div className="carousel-container">
        <div className="carousel-image-container">
          {this.state.activeIndex === 0 && (
            <img className="carousel-image" src={boxgrill} alt="Box Grill" />
          )}
          {this.state.activeIndex === 1 && (
            <img className="carousel-image" src={boxmeat} alt="Box Meat" />
          )}
          {this.state.activeIndex === 2 && (
            <img className="carousel-image" src={wings} alt="Wings" />
          )}
        </div>
        <div className="carousel-arrows">
          <div className="back-arrow" onClick={this.slideBack}>
            <svg
              className="arrow"
              fill="rgb(222, 65, 27)"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z" />
            </svg>
          </div>
          <div className="forward-arrow" onClick={this.slideForward}>
            <svg
              className="arrow"
              fill="rgb(222, 65, 27)"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
