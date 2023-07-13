import React from "react";
import image from "../../src/images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={image} alt="" srcset="" />
      <div>
        <a href="">Shop</a>
        <a href="">Orders</a>
        <a href="">Inventory</a>
        <a href="">About Us</a>
      </div>
    </nav>
  );
};

export default Header;
