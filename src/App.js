import React, { useState } from 'react';

import "~/App.css";
import "swiper/css/bundle";
import Header from "~/component/layouts/Header";
import Footer from "~/component/layouts/Footer";
import Navigation from "~/component/layouts/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "~/pages/Home";
import FashionPage from "~/pages/Fashion";
import LifeStylePage from "~/pages/LifeStyle";
import ShopPage from "~/pages/Shop";
import TravelPage from "~/pages/Travel";
import AboutPage from "~/pages/About";
import ContactPage from "~/pages/Contact";
import DownloadPage from "~/pages/Download";
import ProductDetail from "./component/ProductDetail";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState({})
  return (

    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/fashion" element={<FashionPage />}/>
          <Route path="/lifestyle" element={<LifeStylePage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/travel" element={<TravelPage />}/>
          <Route path="/download" element={<DownloadPage />}/>
          <Route path="/product-detail" element={<ProductDetail/>} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
