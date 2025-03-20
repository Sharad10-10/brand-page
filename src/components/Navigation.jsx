import React from "react";
import Logo from "../images/brand_logo.svg";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="login">Login</button>
    </nav>
  );
};

export default Navigation
