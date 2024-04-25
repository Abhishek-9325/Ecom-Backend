const express = require("express");
const {
  fetchCartByUserId,
  addToCart,
  updateCart,
  deleteCart,
} = require("../controller/Cart");

const router = express.Router();

exports.cartRoutes = router
  .get("/", fetchCartByUserId)
  .post("/", addToCart)
  .patch("/:id", updateCart)
  .delete("/:id", deleteCart);
