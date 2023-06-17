import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// Imagen
import img from "./logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/">
        <img className="Imglogo" src={img} alt="HGBiomedics"/>
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
