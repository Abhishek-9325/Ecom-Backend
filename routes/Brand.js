const express = require("express");
const { fetchBrands, createBrand } = require("../controller/Brand");

const router = express.Router();

exports.brandRoutes = router.get("/", fetchBrands).post("/", createBrand);
