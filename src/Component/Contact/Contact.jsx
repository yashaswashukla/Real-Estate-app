import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>
          <div className="flexColStart contact-modes">
            <div className="flexColStart row">
              {/** 1st row */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 982 122 4218</span>
                  </div>
                </div>
                <div className="flexCenter btn">Call Now</div>
              </div>

              {/** 2nd row */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+91 982 122 4218</span>
                  </div>
                </div>
                <div className="flexCenter btn">Chat Now</div>
              </div>

              {/** 3rd row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+91 982 122 4218</span>
                  </div>
                </div>
                <div className="flexCenter btn">Call Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right flexEnd">
          <div className="image-container">
            <img src="./main4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
