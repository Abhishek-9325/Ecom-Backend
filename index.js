const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const { productRoutes } = require("./routes/Product");
const cors = require("cors");
const { brandRoutes } = require("./routes/Brand");
const { categoryRoutes } = require("./routes/Category");
const { userRoutes } = require("./routes/User");
const { authRoutes } = require("./routes/Auth");
const { cartRoutes } = require("./routes/Cart");
const { orderRoutes } = require("./routes/Order");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

async function dbconnect() {
  // mongoose url
  await mongoose.connect(
    "mongodb+srv://abhimourya9325:EPYpo770iLOXzIZF@cluster0.vn3gd2e.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
  );
}
try {
  dbconnect();
  console.log("Connected to database");
} catch (err) {
  console.log(err);
}

// routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/brands", brandRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(port, () => {
  console.log("Server is listening at " + port);
});
