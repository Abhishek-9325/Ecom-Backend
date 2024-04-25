const express = require("express");
const {
  fetchUserById,
  updateUser,
  fetchAllUsers,
} = require("../controller/User");
const router = express.Router();

exports.userRoutes = router
  .get("/", fetchAllUsers)
  .get("/:id", fetchUserById)
  .patch("/:id", updateUser);
