import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{
                backgroundColor: "grey",
                height: "10vh",
               
            }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="../index.html"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          width: "100%",
                          fontSize:"3vh",
                        }}>
                            <li className="nav-item">
                            <Link className="li" to="/">
                            Home
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="li" to="/about">
                            About
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="li" to="/contact">
                            Contact
                            </Link>
                            </li>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </div>
                            <li>
                            <CardWidget />
                            </li>
                        </ul>

                        <a className="navbar-brand"></a>
                    </div>
                </div>
                
            </nav>
     </div>
    //nav
    //   style={{
    //     backgroundColor: "black",
    //     height: "10vh",
    //   }}
    // >
    //   <ul
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-evenly",
    //       width: "100%",
    //     }}
    //   >
    //     <li style={{ color: "white", listStyle: "none" }}>
    //       <a href="https://www.google.com">Inicio</a>
    //     </li>
    //     <li style={{ color: "white", listStyle: "none" }}>
    //       <a href="https://www.google.com">About</a>
    //     </li>
    //     <li style={{ color: "white", listStyle: "none" }}>
    //       <a href="https://www.google.com">Contact</a>
    //     </li>
    //     <li>
    //       <CardWidget />
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavBar;
