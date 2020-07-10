import React from "react"
import DeliveryImg from "../utils/images/Delivery.png"
import "./Delivery.css"

function Delivery() {
  return (
    <div className="delivery">
      <div>
        <img src={DeliveryImg} alt="Our Partner" className="delivery-img" />
        <div className="delivery-club"></div>
      </div>
      <div className="delivery-description">
        <p>
          <span className="bold">Delivery club</span> is our partner.
        </p>
        <p>We deliver your favorite food to your office or home.</p>
        <p>
          To have your food delivered all you need to do is press the{" "}
          <span className="bold"> Order </span>
          button on an item and wait until the order arrives.
        </p>
        <p>
          Delivery service is available <span className="bold">24/7</span>{" "}
          including weekends and holidays.
        </p>
        <p>
          Delivery cost is <span className="bold">2$</span>.
        </p>
        <p>
          Duration of the delivery varies between{" "}
          <span className="bold">30-90 minutes</span>. It depends on the
          weather. It usually lasts longer when you order in the night.
        </p>
      </div>
    </div>
  )
}

export default Delivery
