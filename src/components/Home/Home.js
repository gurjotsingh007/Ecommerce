import React, { Fragment, useEffect } from "react";
import { FaMouse } from 'react-icons/fa';
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { allProductRequest, allProductSuccess, allProductFail } from '../../utils/Product/productSlice'; // Import your action creators
import Loader from "../layout/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products , productsCount} = useSelector(state => state.products); // Get products, loading, and error from the store state

  useEffect(() => {
    // Dispatch action to indicate loading started
    // if(error){
    //   useReact toastify
    // }
    dispatch(allProductRequest());

    fetch("/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // Dispatch success action with fetched data
        dispatch(allProductSuccess(data));
      })
      .catch((err) => {
        // Dispatch failure action with the error message
        dispatch(allProductFail(err.message));
      });
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (<Loader/>):(
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
          <p>Error While Loding the page{console.log(error)}</p>
        ) : (products &&
          products.map((product) => (
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
