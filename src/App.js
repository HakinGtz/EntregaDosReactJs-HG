import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Class => tener state y ciclos de vida
// Funcionales => Solo retornaban JSX (dummy, staless, funcionales)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="HGBiomedics"
          subtitle="Soy un subtitle a partir de una prop"
        />
        <NavBar />
        <div>
          <ItemListContainer greeting="¡Bienvenidos a HGBiomedics! Lo invitamos a ver nuestro cátalogo" />
        </div>
      </div>
    );
  }
}

export default App;
