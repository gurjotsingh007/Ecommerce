import React, { useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header.js';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Footer from './components/layout/Footer/Footer.js';
import ProductDetails from './components/Products/ProductDetails';
import Products from './components/Products/Products';
import Search from './components/Products/Search';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  }, []);

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
