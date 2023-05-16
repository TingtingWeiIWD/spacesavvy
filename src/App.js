import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import * as database from "./database";
import Loading from "./components/Loading";
import "./styles/index.scss";

// For Shop we have all our products displayed and we can make a filter

// For about we can put history, mission and the team

// For contact we can have a form there

function App() {
  const [products, setProducts] = useState([]);
  //  const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const data = await database.load();
  //     setProducts(data);
  //     setIsLoading(false);
  //   })();
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
