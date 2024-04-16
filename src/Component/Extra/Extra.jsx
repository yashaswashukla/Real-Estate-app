import React from "react";
import "./Extra.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

export default function Extra() {
  return (
    <section className="extra-wrapper">
      <div className="paddings innerWidth flexCenter extra-container">
        <div className="flexColStart extra-left">
          <div className="extra-title">
            <div className="blue-circle"></div>
            <h1>
              Discover <br /> Your Perfect <br />
              Property
            </h1>
          </div>
          <div className="flexColStart extra-des">
            <span className="secondaryText">
              Find properties that suits you the best
            </span>
            <span className="secondaryText">
              You will not face any difficulties in finding the best residence
              for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="blue" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={10500} end={12000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={15} end={30} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>

        <div className="flexCenter extra-right">
          <div className="image-container">
            <img src="Main.jpeg" alt="Main" />
          </div>
        </div>
      </div>
    </section>
  );
}
