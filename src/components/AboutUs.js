import React from "react"
import AboutUsPic from "../utils/images/About Us Pic.png"
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className="about-us">
      <img src={AboutUsPic} alt="Food Delivery" />
      <div className="about-us-description">
        <p>
          <span className="bold">Food Delivery</span> is a place where you can
          order the most delicious food. Our friendly employees will{" "}
          <span className="bold">deliver fast</span> and provide you the best
          services.
        </p>
        <p>
          If you're asking{" "}
          <span className="bold">"Why should I choose Food Delivery?"</span> -
          it's because our food is cooked by experienced chefs and yet it's
          price won't scare you.
        </p>
        <p>
          Food Delivery started as a small restaurant in 2004. Now it has grown
          into a big food delivery chain. You can find us in almost all the
          regions.
        </p>
        <p>
          Our mission is to provide our customers{" "}
          <span className="bold">the best food they've ever tasted</span>.
        </p>
        <p>
          We take care of every customer. For those who order more than 5 times
          we offer our Delivery Card. Show this card to our employee when your
          food arrives and you'll get a <span className="bold">10% off</span>{" "}
          for each item you've ordered.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
