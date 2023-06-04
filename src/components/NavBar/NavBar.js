import React from "react";
import "./NavBar.css";

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
                                <a className="nav-link white" aria-current="page" href="../index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white" href="noticias.html">Noticias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active white" href="productos.html">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link white" href="nosotros.html">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white" href="contacto.html">Contáctanos</a>
                            </li>
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
