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
import store from './utils/store'
import { loadUser } from './utils/Users/usersAction';
import Profile from './components/User/Profile.js'
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile.js'
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
    store.dispatch(loadUser());
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
          <Route path="/account" element={
              <ProtectedRoute>
              <Profile/>
              </ProtectedRoute>
          }/>
          <Route path="/me/update" element={
              <ProtectedRoute>
              <UpdateProfile/>
              </ProtectedRoute>
          }/>
          <Route path="/password/update" element={
              <ProtectedRoute>
              <UpdatePassword/>
              </ProtectedRoute>
          }/>
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
