import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Brand from './components/Brand';
import LoginRegister from './components/LoginRegister';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/loginregister" element={<LoginRegister />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
