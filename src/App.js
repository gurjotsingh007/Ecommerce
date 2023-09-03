import React, { useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header.js';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Footer from './components/layout/Footer/Footer.js';
import ProductDetails from './components/Products/ProductDetails';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes> {/* Use Routes as the top-level routing container */}
          <Route path="/" element={<Home />} /> {/* Use 'element' to specify the component */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
