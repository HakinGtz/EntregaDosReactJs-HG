import React from "react";
import "./Header.css";

// Imagen
import img from "./logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <a href="../public/index.html">
      <img className="Imglogo"src={img} alt="logo-coder" /></a>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
