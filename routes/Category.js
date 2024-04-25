const express = require("express");
const { fetchCategories, createCategory } = require("../controller/Category");

const router = express.Router();

exports.categoryRoutes = router
  .get("/", fetchCategories)
  .post("/", createCategory);
