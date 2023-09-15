import React, { useEffect, useState } from 'react';
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
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './components/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './components/Cart/OrderSuccess'
import MyOrders from './components/Order/MyOrders.js'
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import ProductList from './components/Admin/ProductList.js';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import OrderList from './components/Admin/OrderList';
import ProcessOrder from './components/Admin/ProcessOrder';
import UsersList from './components/Admin/UsersList';

function App() {
  const [stripeApiKeys, setStripeApiKey] = useState("");

  async function getStriptApiKey(){
    const {data} = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
    store.dispatch(loadUser());
    
    getStriptApiKey();
  }, [stripeApiKeys]);

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/login/shipping" element={
              <ProtectedRoute>
              <Shipping/>
              </ProtectedRoute>
          }/>
          <Route path="/order/confirm" element={
              <ProtectedRoute>
              <ConfirmOrder/>
              </ProtectedRoute>
          }/>
          {stripeApiKeys &&
          <Route path="/process/payment" element={
            <ProtectedRoute>
              <Elements stripe={loadStripe(stripeApiKeys)}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          } />}
          <Route path="/success" element={
              <ProtectedRoute>
              <OrderSuccess/>
              </ProtectedRoute>
          }/>
          <Route path="/orders" element={
              <ProtectedRoute>
              <MyOrders/>
              </ProtectedRoute>
          }/>
          <Route path="/order/:id" element={
              <ProtectedRoute>
              <OrderDetails/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/dashboard" element={
              <ProtectedRoute>
              <Dashboard/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/products" element={
              <ProtectedRoute>
              <ProductList/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/product" element={
              <ProtectedRoute>
              <NewProduct/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/product/:id" element={
              <ProtectedRoute>
              <UpdateProduct/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/orders" element={
              <ProtectedRoute>
              <OrderList/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/order/:id" element={
              <ProtectedRoute>
              <ProcessOrder/>
              </ProtectedRoute>
          }/>
          <Route path="/admin/users" element={
              <ProtectedRoute>
              <UsersList/>
              </ProtectedRoute>
          }/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
