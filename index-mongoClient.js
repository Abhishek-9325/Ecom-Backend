const express = require("express");
const app = express();
const port = 8088;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { MongoClient } = require("mongodb");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function dbconnect() {
  // mongoose url
  const client = new MongoClient(
    "mongodb+srv://abhimourya9325:EPYpo770iLOXzIZF@cluster0.vn3gd2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  // const db = mongoose.connection;
  // const userData = db.db.collection("user").find({});
  const database = client.db("sample_mflix");
  const movies = database.collection("movies");
  const query = { title: "Back to the Future" };
  const movie = await movies.findOne(query);
  console.log(movie);
}
try {
  dbconnect();
  console.log("Connected to database");
} catch (err) {
  console.log(err);
}

// async function getUserData() {
//   // const UserSchema = new Schema({}, { strict: false });
//   // const User = mongoose.model("User", UserSchema, "users");
//   // const userData = await User.find({});
//   const userData = await conn.db.collection("User").find().toArray();
//   console.log(userData);
// }

// getUserData();

// routes

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(port, () => {
  console.log("Server is listening at " + port);
});
