import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800)
      return { right: !menuOpen && "-100%" };
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter innerWidth paddings">
        <img src="logo.jpg" alt="Logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpen)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="btn">Contact</button>
          </div>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
}
