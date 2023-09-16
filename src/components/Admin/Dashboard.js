import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { getAllUsers } from "../../utils/Users/usersAction.js";
import { getAllAdminOrders } from "../../utils/Order/OrderAction.js";
import { getAdminProducts } from "../../utils/Product/productAction.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  
  const { adminProducts } = useSelector((state) => state.products);

  const { orderDetail } = useSelector((state) => state.orders);

  const { allUsersData } = useSelector((state) => state.users);
  let outOfStock = 0;

  adminProducts &&
  adminProducts.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllAdminOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orderDetail &&
  orderDetail.forEach((item) => {
      totalAmount += Number(item.totalPrice);
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, adminProducts.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{adminProducts && adminProducts.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orderDetail && orderDetail.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{allUsersData && allUsersData.length}</p>
            </Link>
          </div>
        </div>

        {/* <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;