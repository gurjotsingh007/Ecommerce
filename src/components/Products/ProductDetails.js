import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { Rating } from "@material-ui/lab";
import { getSingleProduct, newReview } from "../../utils/Product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addItemsToCart } from "../../utils/Cart/cartActions";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { toast } from 'react-toastify';
import { resetAllState } from "../../utils/Users/usersSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { loadingSingle, singleProduct, error, reviewError, review } = useSelector(
    (state) => state.products
  );
  const [searchParams] = useSearchParams();
  const product_id = searchParams.get("id");
  useEffect(() => {
    dispatch(getSingleProduct(product_id));
  }, [dispatch, product_id, reviewError, review]);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const options = {
    size: "large",
    value: singleProduct?.product?.ratings || 0,
    readOnly: true,
    precision: 0.5,
  };

  const increaseQuantity = () => {
    if (singleProduct?.product?.stock <= quantity) return;

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

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", product_id);

    dispatch(newReview(myForm));

    setOpen(false);
  }

  if(reviewError && !review){
    toast.error(reviewError);
    dispatch(resetAllState());
  }

  const addToCartHandler = () => {
    dispatch(addItemsToCart({product_id, quantity}));
    toast.success("Item added to cart");
  }

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
                  ({singleProduct?.product?.numberOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${singleProduct?.product?.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <span className="quantitySpan">{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={singleProduct?.product?.stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b
                    className={
                      singleProduct?.product?.stock < 1
                        ? "redColor"
                        : "greenColor"
                    }
                  >
                    {singleProduct?.product?.stock < 1 ? "OutOfStock" : "InStock"}
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

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

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
