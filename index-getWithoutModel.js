const express = require("express");
const app = express();
const port = 8088;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function dbconnect() {
  // mongoose url
  await mongoose.connect(
    "mongodb+srv://abhimourya9325:EPYpo770iLOXzIZF@cluster0.vn3gd2e.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
  );
}
try {
  dbconnect();
  console.log("Connected to database");
} catch (err) {
  console.log(err);
}

async function getUserData() {
  const UserSchema = new Schema({}, { strict: false });
  const User = mongoose.model("User", UserSchema, "users");
  const userData = await User.find();
  console.log(userData);
}

getUserData();

// routes

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(port, () => {
  console.log("Server is listening at " + port);
});
