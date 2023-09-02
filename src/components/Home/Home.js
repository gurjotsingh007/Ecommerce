import React, { Fragment, useEffect } from "react";
import { FaMouse } from 'react-icons/fa';
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";

const product = {
    name:"name",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    _id:1122,
    price:"200",
    numOfReviews:100,

}

const Home = () => {
  return (
        <Fragment>
          <MetaData title="Ecommerce"/>
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
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
                <ProductCard key={product._id} product={product} />
          </div>
        </Fragment>
  );
};

export default Home;