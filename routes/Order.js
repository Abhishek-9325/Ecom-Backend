const express = require("express");
const {
  updateOrder,
  createOrder,
  fetchAllOrders,
  fetchOrdersByUser,
} = require("../controller/Order");
const router = express.Router();

exports.orderRoutes = router
  .get("/", fetchAllOrders)
  .get("/", fetchOrdersByUser)
  .post("/", createOrder)
  .patch("/:id", updateOrder);
