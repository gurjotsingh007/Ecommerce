import "./Payment.css";
import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { populateOrder } from "../../utils/Order/OrderSlice";
import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder } from "../../utils/Order/OrderAction";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.users);
  const userInfo = user.user;
  const {error} = useSelector((state) => state.orders);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  order.paymentInfo = {
    id: "PaymentInfo id",
    status: "PaymentInfo id",
  };
  
  // const [stripeApiKeys, setStripeApiKey] = useState("");
  // async function getStriptApiKey(){
  //   const {data} = await axios.get("/api/v1/stripeapikey");
  //   setStripeApiKey(data.stripeApiKey);
  // }

  const submitHandler = async (e) => {
    e.preventDefault();
  
    payBtn.current.disabled = true;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const { data } = await axios.post("/api/v1/order/new", order, config);
      dispatch(populateOrder(data.order));
  
      payBtn.current.disabled = false;
      navigate("/success");
    } catch (error) {
      alert("Error creating order: " + error.response.data.message);
      payBtn.current.disabled = false;
    }
  };
  
      

  

  useEffect(() => {
    if (error) {
      alert(error);
    }
    // getStriptApiKey();
  }, [error, dispatch]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
