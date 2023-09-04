import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { Rating } from "@material-ui/lab";
import { getSingleProduct } from "../../utils/Product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { loadingSingle, singleProduct, error } = useSelector(
    (state) => state.products
  );

  console.log(loadingSingle, singleProduct, error);
  const [searchParams] = useSearchParams();
  const product_id = searchParams.get("id");
  useEffect(() => {
    dispatch(getSingleProduct(product_id));
    console.log(product_id);
  }, [dispatch, product_id]);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const options = {
    size: "large",
    value: singleProduct?.product?.ratings || 0,
    readOnly: true,
    precision: 0.5,
  };

  const increaseQuantity = () => {
    if (singleProduct?.product?.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Fragment>
      {loadingSingle ? (
        <Loader />
      ) : (singleProduct&&
        <Fragment>
          <MetaData title={`${singleProduct?.product?.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {singleProduct?.product?.images &&
                  singleProduct?.product?.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{singleProduct?.product?.name}</h2>
                <p>Product # {singleProduct?.product?._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  ({singleProduct?.product?.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${singleProduct?.product?.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={singleProduct?.product?.Stock < 1 ? true : false}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b
                    className={
                      singleProduct?.product?.Stock < 1
                        ? "redColor"
                        : "greenColor"
                    }
                  >
                    {singleProduct?.product?.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{singleProduct?.product?.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {singleProduct?.product?.reviews && singleProduct?.product?.reviews[0] ? (
            <div className="reviews">
              {singleProduct?.product?.reviews &&
                singleProduct?.product?.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
