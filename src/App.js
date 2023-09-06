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
import Login from './components/User/Login';

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
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;