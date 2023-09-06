import React, { useEffect, Fragment, useState } from 'react';
import './Products.css';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../utils/Product/productAction';
import { useParams } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Pagination from "react-js-pagination";
import ProductCard from "../Home/ProductCard";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData"
import { changePrice, changeCurrPage, setProductCategory, setProductRating } from '../../utils/UpdatingValues/updatingSlice';

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
  "Wheeler"
];

const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);


  const {products, loading, error} = useSelector(state => state.products);
  const {productCount, resultPerPage, filteredProductsCount} = products;

  let { keyword } = useParams();
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    dispatch(changeCurrPage(e));
  };

  const settingCategory = (event, type) => {
    setCategory(type);
    dispatch(setProductCategory(type));
  }

  const settingRating = (event, rate) => {
    setRatings(rate);
    dispatch(setProductRating(rate));
  }

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
    dispatch(changePrice(newPrice));
  };

  let count = filteredProductsCount;
  useEffect(()=>{
    if(error){
      alert("Error Occured");
    }
    dispatch(getProducts(keyword));
  }, [dispatch, keyword, price, currentPage, category, ratings])
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products.products &&
              products.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={(e) => settingCategory(e,category)}
                >
                  {category}
                </li>
              ))}
            </ul>

              <Typography component="legend">Ratings Above</Typography>
              
              <Slider
                value={ratings}
                onChange={(e, newRating) => settingRating(e, newRating)}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default Products
