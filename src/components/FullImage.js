import React from "react";
import "./FullImage.css";

function FullImage(props) {
  return (
    <div className="item-details-background">
      <div className="item-details-container">
        <img src={props.image} alt=""/>
        <div className="item-details-close-button">
          <svg
            onClick={props.handleShowItemFullImage}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FullImage;
