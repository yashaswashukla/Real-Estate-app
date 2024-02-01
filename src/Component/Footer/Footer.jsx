import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="f-left flexColStart">
          <img src="logo.jpg" alt="" width={120} />
          <span className="secondaryText">
            Our Vision is to help you buy by providing you the best experience
            possible.
          </span>
        </div>

        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Bangalore, Karnataka</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
