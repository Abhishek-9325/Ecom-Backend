const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controller/Product");
const router = express.Router();

exports.productRoutes = router
  .get("/", fetchAllProducts)
  .get("/:id", fetchProductById)
  .post("/", createProduct)
  .patch("/:id", updateProduct);
