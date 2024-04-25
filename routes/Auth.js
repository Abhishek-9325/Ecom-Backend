const express = require("express");
const { createUser, loginUser } = require("../controller/User");
const router = express.Router();

exports.authRoutes = router
  .post("/signup", createUser)
  .post("/login", loginUser);
