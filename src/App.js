import "./App.css";

// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";


// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
// Class => tener state y ciclos de vida
// Funcionales => Solo retornaban JSX (dummy, staless, funcionales)

const App = () => {
    return (
      <Router>
      <div className="App">
        <Header
        title="HGBiomedics"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
      </Router>
    );
  };

export default App;
