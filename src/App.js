import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

// pages: home, shop, about, contact

//For home page we can just copy the example

// For Shop we have all our products displayed and we can make a filter

// For about we can put history, mission and the team

// For contact we can have a form there

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
