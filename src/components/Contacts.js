import React from "react"
import "./Contacts.css"

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-delivery">
        <div>
          <p>
            We deliver in <span className="bold">Chishinau</span>.
          </p>
          <p>
            Phone number: <span className="bold">069 520 520</span>
          </p>
          <p>Daily 24/7</p>
          <p>
            <span className="email">info@delivery.md</span>
          </p>
        </div>
      </div>
      <div className="contacts-addresses">
        <div>
          <p>We're excited to see you at:</p>
          <div className="address">
            <p className="bold">Botanica</p>
            <p>MallDova</p>
            <p>Daily 10:00 - 22:00</p>
            <p>Arborilor street</p>
          </div>
          <div className="address">
            <p className="bold">Buiucani</p>
            <p>ZityMall</p>
            <p>Daily 10:00 - 21:00</p>
            <p>Calea Iesilor street</p>
          </div>
          <div className="address">
            <p className="bold">Riscani</p>
            <p>Wurst</p>
            <p>Daily 10:00 - 21:00</p>
            <p>Moscova street</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
