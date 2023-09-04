import React, { Fragment, useEffect } from "react";
import { FaMouse } from 'react-icons/fa';
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../layout/Loader/Loader";
import { getProducts } from "../../utils/Product/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(state => state.products);
  useEffect(() => {
    // Remove 'error' from the dependency array, as it's not needed here
    dispatch(getProducts());

  }, [dispatch, error]); // Only dispatch when 'dispatch' changes, not 'error'

  return (
    <Fragment>
      {loading ? (<Loader/>) : (
        <Fragment>
          <MetaData title="Ecommerce" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <FaMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              products.products && products.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
